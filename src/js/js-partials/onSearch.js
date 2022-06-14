
import ApiService from "./API";
import appendFilmsMarkup from "./appendFilmsMarkup";
import clearFilmsContainer from "./clearFilmsContainer";

const apiService = new ApiService();

const searchForm = document.querySelector(".input__wraper");
console.log(searchForm);
const filmsContainer = document.querySelector(".films__container");
console.log(filmsContainer);

searchForm.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.searchQuery.value;
  // apiService.query = e.target.value;

  console.log(apiService.query);
  apiService.resetPage();

  apiService.fetchMoviesySearch().then(({ results }) => {
    clearFilmsContainer();
    appendFilmsMarkup(results);
  });

}
