import { trim } from "lodash.throttle";
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

  apiService.query = e.currentTarget.searchQuery.value.trim();
  inputError.textContent = " ";

  apiService.resetPage();

  if (!apiService.query) {
    inputError.textContent = "Please enter something to search ";
    return;
  }

  renderPaginationOnSearch(apiService.query, apiService.page);

  // apiService
  //   .fetchMoviesySearch()
  //   .then(({ results, total_pages }) => {
  //     if (results.length === 0) {
  //       inputError.textContent =
  //         "Search result not successful. Enter the correct movie name and smile : )";
  //       return;
  //     }
  //     clearFilmsContainer();
  //     appendFilmsMarkup(results, filmsContainerIndex);
  //   })
  //   .catch(error => console.log(error));
}
