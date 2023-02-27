/**
 * Load phone
 * displayPhones
 * create element
 * appendChild
 * add even handler into the search btn
 */

const loadPhones = async (searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
};

const displayPhones = (phones, dataLimit) => {
  const phonesContainer = document.getElementById("phone-container");
  phonesContainer.textContent = "";
  // display minimum phone
  const showAll = document.getElementById("show-all");
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }

  // Display no phone found
  const noPhone = document.getElementById("no-phone-message");
  if (phones.length === 0) {
    noPhone.classList.remove("d-none");
  } else {
    noPhone.classList.add("d-none");
  }

  // Display all phone
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("col");
    phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">
                This is a longer card with supporting text below as a
                natural lead-in to additional content. This content is a
                little bit longer.
                </p>
                <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
            </div>
        </div>
        `;
    phonesContainer.appendChild(phoneDiv);
  });

  // stop loader
  toggleSpinner(false);
};

document.getElementById("btn-search").addEventListener("click", function () {
  // start loader
  // toggleSpinner(true);
  // const searchField = document.getElementById("search-field");
  // const searchText = searchField.value;
  // loadPhones(searchText);
  processSearch(10);
});

// search input button field enter
// document
//   .getElementById("search-field")
//   .addEventListener("keypress", function (event) {
//     // console.log(e.key);
//     if (event.key === "enter") {
//       processSearch(10);
//     }
//   });

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

function processSearch(dataLimit) {
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit);
}

// not the best way of show all data

document.getElementById("btn-show-all").addEventListener("click", function () {
  processSearch();
});

const loadPhoneDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetail(data.data);
};

const displayPhoneDetail = (phone) => {
  console.log(phone);
  const modalTitle = document.getElementById("phoneDetailModalLabel");
  modalTitle.innerText = phone.name;

  const phoneDetails = document.getElementById("phone-details");
  phoneDetails.innerHTML = `
  <p>Release Date: ${
    phone.releaseDate ? phone.releaseDate : "no release date found"
  }</p>
  <strong>Storage: ${
    phone.mainFeatures ? phone.mainFeatures.storage : "nothing found"
  }</strong>
  <p>Others: ${phone.others ? phone.others.Bluetooth : "nothing found"}</p>
  `;
};

loadPhones("apple");
