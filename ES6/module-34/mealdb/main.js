const loadMealDB = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res) => res.json())
    .then((data) => displayMealDB(data.meals));
};

const displayMealDB = (items) => {
    console.log(items);

    for (const item of items) {
        console.log(item);
    }
}

loadMealDB();
