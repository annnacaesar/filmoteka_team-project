import ApiService from "./API";
import appendFilmsMarkup from "./appendFilmsMarkup";
import { renderButtons } from "./pagination";

const apiService = new ApiService();
const filmsContainerIndex = document.querySelector(".js-films-list-index");

window.addEventListener("load", loadPage);

export default function loadPage() {
  apiService.fetchPopular().then(({ results, total_pages }) => {
    appendFilmsMarkup(results, filmsContainerIndex);
    renderButtons(apiService.page, total_pages);
  });
}
