import fetchData from "./libs/fetch-data.js";
import { filteringArray } from "./libs/filter.js";

const data = await fetchData("https://fakestoreapi.com/products");
console.log("data", data);

const cardContainer = document.querySelector(".container__card");

data.forEach((elm) => {
  cardContainer.innerHTML += `
    <div class="col-sm-3">
        <div class="card">
            <img src="${elm.image}" alt="Products" class="card__img">
            <div class="card-body">
                <h2 class="card-title">${elm.title}</h2>
                <h3 class="card__price">${elm.price} $</h3>
                <p class="card-text">${elm.description}</p>
                <a href="#" class="btn btn-primary card__btn">Add to bag</a>
            </div>
        </div>
    </div>
  `;
});

const searchBar = document.querySelector(".search");

searchBar.onkeyup = function () {
  cardContainer.innerHTML = "";

  const sortBy = filteringArray(data, searchBar.value);
  console.log(sortBy);

  sortBy.forEach((elm) => {
    cardContainer.innerHTML += `
        <div class="col-sm-3">
            <img src="${elm.image}" class="card-img-top" alt="">
            <div class="card-body">
                <h2 class="card-title">${elm.title}</h2>
                <h3 class="card__price">${elm.price}</h3>
                <p class="card-text">${elm.description}</p>
                <a href="#" class="btn btn-primary card__btn">Add to bag</a>
            </div>
        </div>
    `;
  });
};
