/* 
1. container element
2. create child for each element
3. set the content of the child
4. appendChild
*/

const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  //   console.log(meals);
  /*
  for (const meal of meals) {
    // console.log(meal);
  } */
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerText = "";
  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
                ${meal.strTags ? meal.strTags : "no tags use"}
            </p>

            <button onclick="loadMealDetail2(${
              meal.idMeal
            })" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
            details
            </button>
            </div>
        </div>
        `;
    mealContainer.appendChild(mealDiv);
  });
};

const searchMeals = () => {
  const searchField = document.getElementById("search-field").value;
  // console.log(searchField);
  loadMeals(searchField);
};

const loadMealDetail = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]))
    .catch((error) => console.log(error));
};

// async await
const loadMealDetail2 = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
      const res = await fetch(url);
  const data = await res.json();
  displayMealDetails(data.meals[0]);
    } catch (error) {
        console.log(error);
  }
};

const displayMealDetails = (meal) => {
//   console.log(meal);
  document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
  document.getElementById("mealDetailsbody").innerHTML = `
    <img src="${meal.strMealThumb}" class="img-fluid" />
    `;

  document.getElementById("mealdetailsDescription").innerText =
    meal.strInstructions;

  document.getElementById("category").innerText = meal.strCategory;
};

loadMeals("fish");
