import ApiService from "./API";
import appendFilmsMarkup from "./appendFilmsMarkup";
import { renderButtons, isQueryOrPopular } from "./pagination";

const apiService = new ApiService();
const filmsContainerIndex = document.querySelector(".js-films-list-index");
const logo = document.querySelector(".logo");

window.addEventListener("load", loadPage);
logo.addEventListener("click", loadPopularPage);

export default function loadPage() {
  let query = sessionStorage.getItem("query");
  let page = sessionStorage.getItem("page");
  if (query === null) query = "";
  if (page === null) page = 1;
  isQueryOrPopular(query, Number(page));
}

function loadPopularPage(e) {
  e.preventDefault();
  const query = "";
  const page = 1;
  isQueryOrPopular(query, page);
}
