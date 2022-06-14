
import ApiService from "./API";
import appendFilmsMarkup from "./appendFilmsMarkup";
import clearFilmsContainer from "./clearFilmsContainer";

const apiService = new ApiService();

const searchForm = document.querySelector(".input__wraper");
const filmsContainerIndex = document.querySelector(".films__container-index");

searchForm.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.searchQuery.value;
  apiService.resetPage();

  apiService.fetchMoviesySearch().then(({ results }) => {
    clearFilmsContainer();
    appendFilmsMarkup(results,filmsContainerIndex);
  });

}
