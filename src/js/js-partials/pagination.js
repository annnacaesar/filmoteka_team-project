import appendFilmsMarkup from "./appendFilmsMarkup";
import clearFilmsContainer from "./clearFilmsContainer";
import MovieApiService from "./API";
const apiService = new MovieApiService();
const refs = {
  arrowLeft: document.querySelector("button[aria-label='previous-page'"),
  arrowRight: document.querySelector("button[aria-label='next-page'"),
  pagination: document.querySelector(".pagination"),
  firstButton: document.querySelector(".firstButton-and-threeDots"),
  lastButton: document.querySelector(".lastButton-and-threeDots"),
  filmsContainerIndex: document.querySelector(".js-films-list-index"),
};
let page = 1;
let totalPages;

function renderButtons(currentPage, pages) {
  if (page > totalPages) return;
  page = currentPage;
  totalPages = pages;

  let beforeActivePage = page - 2;
  let afterActivePage = page + 2;

  if (beforeActivePage < 3) {
    beforeActivePage = 1;
    afterActivePage = 5;
  }
  if (page === totalPages || page + 1 === totalPages) {
    beforeActivePage = page - 3;
    afterActivePage = totalPages;
  }

  for (let i = beforeActivePage; i <= afterActivePage; i += 1) {
    if (i === page) {
      const pageButton = `<button id="paginationButton" data-page="${i}" class="button-page paginationButton active">${i}</button>`;
      refs.pagination.insertAdjacentHTML("beforeend", pageButton);
    } else {
      const pageButton = `<button id="paginationButton" data-page="${i}" class="button-page paginationButton">${i}</button>`;
      refs.pagination.insertAdjacentHTML("beforeend", pageButton);
    }
  }

  if (beforeActivePage >= 3) {
    if (isFirstThreeDots()) {
      return;
    } else {
      renderFirstButtonAndDots();
    }
  }

  if (beforeActivePage < 3 && isFirstThreeDots()) {
    refs.firstButton.innerHTML = "";
  }

  if (
    page === totalPages ||
    page + 1 === totalPages ||
    page + 2 === totalPages ||
    page + 3 === totalPages
  ) {
    refs.lastButton.innerHTML = "";
    return;
  } else if (isLastThreeDots()) {
    return;
  } else {
    renderLastButtonAndDots(totalPages);
  }

  refs.arrowLeft.onclick = onClickArrowLeft;
  refs.arrowRight.onclick = onClickArrowRight;
  refs.pagination.onclick = onClickButton;
  refs.firstButton.onclick = onClickFirstButton;
  refs.lastButton.onclick = onClickLastButton;
}
function onClickFirstButton(event) {
  if (event.target.nodeName === "BUTTON") {
    page = 1;

    renderPaginationOnSearch(apiService.query);
  }
}
function onClickLastButton(event) {
  if (event.target.nodeName === "BUTTON") {
    page = totalPages;

    renderPaginationOnSearch(apiService.query);
  }
}
function onClickArrowLeft() {
  if (page === 1) return;
  page -= 1;
  renderPaginationOnSearch(apiService.query);
}
function onClickArrowRight() {
  if (page === totalPages) return;

  page += 1;
  renderPaginationOnSearch(apiService.query);
}

function resetButtons() {
  refs.pagination.innerHTML = "";
  refs.firstButton.innerHTML = "";
  refs.lastButton.innerHTML = "";
}

function onClickButton(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) return;
  page = Number(event.target.dataset.page);
  renderPaginationOnSearch(apiService.query);
}

function isFirstThreeDots() {
  const isThreeDots = document.querySelector(".page-buttons__first-points");
  if (isThreeDots === null) {
    return false;
  }
  return true;
}
function isLastThreeDots() {
  const isThreeDots = document.querySelector(".page-buttons__last-points");
  if (isThreeDots === null) {
    return false;
  }
  return true;
}

function renderFirstButtonAndDots() {
  const firstButton = `<button id="paginationButton" data-page="1" class="button-page paginationButton">1</button>`;
  const threeDots = `<span class='page-buttons__first-points'>···</span>`;
  refs.firstButton.insertAdjacentHTML("beforeend", firstButton);
  refs.firstButton.insertAdjacentHTML("beforeend", threeDots);
}

function renderLastButtonAndDots(totalPages) {
  const lastButton = `<button id="paginationButton" data-page="${totalPages}" class="button-page paginationButton">${totalPages}</button>`;
  const threeDots = `<span class='page-buttons__last-points'>···</span>`;
  refs.lastButton.insertAdjacentHTML("beforeend", threeDots);
  refs.lastButton.insertAdjacentHTML("beforeend", lastButton);
}

function renderPaginationOnSearch(query) {
  apiService.query = query;
  apiService.page = page;
  apiService.resetPage();
  apiService.fetchMoviesySearch().then(({ results, total_pages }) => {
    clearFilmsContainer();
    appendFilmsMarkup(results, refs.filmsContainerIndex);
    resetButtons();
    renderButtons(apiService.page, total_pages);
  });
}

export { renderButtons, resetButtons, renderPaginationOnSearch };
