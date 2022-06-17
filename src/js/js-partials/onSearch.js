import ApiService from "./API";
import appendFilmsMarkup from "./appendFilmsMarkup";
import clearFilmsContainer from "./clearFilmsContainer";
import {
  renderButtons,
  resetButtons,
  renderPaginationOnSearch,
} from "./pagination";

const apiService = new ApiService();

const searchForm = document.querySelector(".input__wraper");
const filmsContainerIndex = document.querySelector(".js-films-list-index");

searchForm.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();
  apiService.query = e.currentTarget.elements.searchQuery.value;
  apiService.resetPage();
  renderPaginationOnSearch(apiService.query);
  // apiService.fetchMoviesySearch().then(({ results, total_pages }) => {
  //   clearFilmsContainer();
  //   appendFilmsMarkup(results, filmsContainerIndex);
  //   resetButtons();
  //   renderButtons(apiService.page, total_pages);
  // });
}
