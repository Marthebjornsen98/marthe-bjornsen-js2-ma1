import fetchData from "./libs/fetch-data.js";
import { filteringArray } from "./libs/filter.js";

let data = await fetchData("https://fakestoreapi.com/products");
console.log("data", data);

const search = document.querySelector(".search");
const searchResult = document.querySelector(".search__result");

search.onkeyup = function () {
  searchResult.innerHTML = "";
  let filteredBy = filteringArray(data, search.value);

  if (filteredBy.length === 0) {
    searchResult.innerHTML = "No results, the price is too low.";
    return;
  }

  filteredBy.forEach((elm) => {
    searchResult.innerHTML += `
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
