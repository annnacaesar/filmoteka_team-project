import loadPage from "./loadPage";
import ApiService from "./API";

import appendFilmsMarkup from "./appendFilmsMarkup";

const searchForm = document.querySelector(".input__wraper");
console.log(searchForm);
const searchBtn = document.querySelector(".input__search-btn");
console.log(searchBtn);
const filmsContainer = document.querySelector(".films__container");
console.log(filmsContainer);

const apiService = new ApiService();

searchForm.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.searchQuery.value;
  console.log(apiService.query);
  apiService.resetPage();

  apiService.fetchMoviesySearch().then(appendFilmsMarkup);
}
