import fetchData from "./libs/fetch-data.js";
import { filteringArray } from "./libs/filter.js";

const data = await fetchData("https://fakestoreapi.com/products");
console.log("data", data);

const cardContainer = document.querySelector(".container__card");
console.log(cardContainer);

data.forEach((elm) => {
  cardContainer.innerHTML += `
    <div class="col-sm-3">
        <div class="card">
            <img src="${elm.image}" alt="Products" class="card__img">
            <div class="card-body">
                <h2 class="card-title">${elm.title}</h2>
                <p class="card-text">${elm.description}</p>
                <a href="#" class="btn btn-primary card__btn">Add to favourites</a>
            </div>
        </div>
    </div>
  `;
});

let searchBar = document.querySelector(".search");
console.log(searchBar);
searchBar.onkeyup = function () {
  cardContainer.innerHTML = "";

  let sortedByPrice = filteringArray(data, searchBar.value);
  console.log(sortedByPrice);

  for (let i = 0; i < sortedByPrice.length; i++) {
    cardContainer.innerHTML += `<div class="col-sm-3">
      <img src="${sortedByPrice[i].image}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${sortedByPrice[i].title}</h5>
        <p class="card-text">${sortedByPrice[i].description}</p>
        <a href="#" class="btn btn-primary">Add to favourites</a>
      </div>
    </div>`;
  }
};
