// import debounce from "lodash.debounce";
import ApiService from "./API";
import appendFilmsMarkup from "./appendFilmsMarkup";
import clearFilmsContainer from "./clearFilmsContainer";
import { renderPaginationOnSearch } from "./pagination";

const apiService = new ApiService();

const searchForm = document.querySelector(".input__wraper");
const inputError = document.querySelector(".input__error");
const filmsContainerIndex = document.querySelector(".js-films-list-index");

searchForm.addEventListener("submit", onSearch);

export function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.searchQuery.value;
  apiService.resetPage();

  inputError.textContent = " ";

  renderPaginationOnSearch(apiService.query, apiService.page);

  //Вибач, Наталю, але мені або зробити ось так, або переписувати половину свого коду :(

  apiService
    .fetchMoviesySearch()
    .then(({ results, total_pages }) => {
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
