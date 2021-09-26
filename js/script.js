import fetchData from "./libs/fetch-data.js";
import { filteringArray } from "./libs/filter.js";

let data = await fetchData("https://fakestoreapi.com/products");
console.log("data", data);

const search = document.querySelector(".search");
const searchResult = document.querySelector(".search__result");
const loading = document.querySelector(".loading");

search.onkeyup = function () {
  searchResult.innerHTML = "";
  let filteredBy = filteringArray(data, search.value);

  if (filteredBy.length === 0) {
    searchResult.innerHTML = "No results, the price is too low.";
    return;
  }

  normalCards(filteredBy);
};

function normalCards(param) {
  param.forEach((elm) => {
    loading.innerHTML = "";
    searchResult.innerHTML += `
      <div class="col-sm-3">
        <div class="card">
            <img src="${elm.image}" class="card__img" alt="Product image">
            <div class="card-body">
                <h2 class="card-title">${elm.title}</h2>
                <h3 class="card__price">${elm.price}</h3>
                <p class="card-text">${elm.description}</p>
                <a href="#" class="btn card__btn">Add to bag</a>
            </div>
        </div>
      </div>
  `;
  });
}

normalCards(data);
