import ApiService from "./API";
import appendFilmsMarkup from "./appendFilmsMarkup";
import clearFilmsContainer from "./clearFilmsContainer";

const apiService = new ApiService();

const searchForm = document.querySelector(".input__wraper");
const filmsContainerIndex = document.querySelector(".js-films-list-index");
const inputError = document.querySelector(".input__error");
console.log(inputError);

searchForm.addEventListener("submit", onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   apiService.query = e.currentTarget.elements.searchQuery.value;
//   apiService.resetPage();

//   apiService.fetchMoviesySearch().then(({ results }) => {
//     clearFilmsContainer();
//     appendFilmsMarkup(results, filmsContainerIndex);
//   });
// }

function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.searchQuery.value;
  apiService.resetPage();

  if (apiService.query.length === 0) {
    inputError.textContent =
      "Search result not successful. Enter the correct movie name and ";
    setTimeout(() => {
      document.location.reload();
    }, 2000);
    return;
  } else {
    inputError.textContent = " ";
    apiService.fetchMoviesySearch().then(({ results }) => {
      clearFilmsContainer();
      appendFilmsMarkup(results, filmsContainerIndex);
    });
  }
}
