import debounce from "lodash.debounce";
import ApiService from "./API";
import appendFilmsMarkup from "./appendFilmsMarkup";
import clearFilmsContainer from "./clearFilmsContainer";
import debounce from "lodash.debounce";

const DEBOUNCE_DELAY = 300;

const apiService = new ApiService();

const searchForm = document.querySelector(".input__wraper");
const filmsContainerIndex = document.querySelector(".js-films-list-index");
const inputError = document.querySelector(".input__error");

searchForm.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();

  // apiService.query = e.currentTarget.elements.searchQuery.value.trim();
  apiService.query = e.target.value.trim();

  console.log(apiService.query);
  apiService.resetPage();

  inputError.textContent = " ";
  apiService
    .fetchMoviesySearch()
    .then(({ results }) => {
      if (results.length === 0) {
        inputError.textContent =
          "Search result not successful. Enter the correct movie name and smile : )";
        return;
      }
      clearFilmsContainer();
      appendFilmsMarkup(results, filmsContainerIndex);
    })
    .catch(error => console.log(error));
}
