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
  inputError: document.querySelector(".input__error"),
};

let page = 1;
let totalPages;

function renderButtons(currentPage, pages) {
  //проверка, чтобы не рендерить кнопки больше, чем есть от бекенда
  if (page > totalPages) return;

  page = currentPage;
  totalPages = pages;

  let beforeActivePage = page - 2;
  let afterActivePage = page + 2;

  //рендер, если активная кнопка среди последних
  if (page === totalPages || page + 1 === totalPages) {
    beforeActivePage = page - 3;
    afterActivePage = totalPages;
  }

  //Если активная кнопка меньше 5, рендерим 5 кнопок
  // Заодно избегаем попадания переменной beforeActivePage в минуса
  if (beforeActivePage < 3) {
    beforeActivePage = 1;
    afterActivePage = 5;
  }
  //Проверка, что страниц не меньше 5. Если меньше - рендерим нужное количество
  if (totalPages <= 5) {
    beforeActivePage = page;
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

  // рендер первой кнопки с точками
  if (beforeActivePage >= 3) {
    if (isFirstThreeDots()) {
      return;
    } else {
      renderFirstButtonAndDots();
    }
  }

  //Убираем точки и первую кнопку, если активная кнопка меньше 5 и точки существуют
  if (beforeActivePage < 3 && isFirstThreeDots()) {
    refs.firstButton.innerHTML = "";
  }

  //Долго высчитывал. Убираем последнюю кнопку и точки, если
  //активная страница среди последних и точки существуют
  //Если предыдущие условия не проканали, наоборот точки и последнюю кнопку рендер
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

  //удобная замена для слушателей
  refs.arrowLeft.onclick = onClickArrowLeft;
  refs.arrowRight.onclick = onClickArrowRight;
  refs.pagination.onclick = onClickButton;
  refs.firstButton.onclick = onClickFirstButton;
  refs.lastButton.onclick = onClickLastButton;
}

function onClickFirstButton(event) {
  if (event.target.nodeName === "BUTTON") {
    page = 1;

    isQueryOrPopular();
  }
}

function onClickLastButton(event) {
  if (event.target.nodeName === "BUTTON") {
    page = totalPages;

    isQueryOrPopular();
  }
}

function onClickArrowLeft() {
  if (page === 1) return;
  page -= 1;
  isQueryOrPopular();
}

function onClickArrowRight() {
  if (page === totalPages) return;

  page += 1;
  isQueryOrPopular();
}

function resetButtons() {
  refs.pagination.innerHTML = "";
  refs.firstButton.innerHTML = "";
  refs.lastButton.innerHTML = "";
}

function onClickButton(event) {
  event.preventDefault();
  //если клик не в кнопку, а в див - ничо не делаем. Позже кнопку расширю паддингами
  if (event.target === event.currentTarget) return;
  page = Number(event.target.dataset.page);
  isQueryOrPopular();
}

//проверка существования точек после первой кнопки
//нужно для их рендера или удаления
function isFirstThreeDots() {
  const isThreeDots = document.querySelector(".page-buttons__first-points");
  if (isThreeDots === null) {
    return false;
  }
  return true;
}

//проверка существования точек перед последней кнопкой
//нужно для их рендера или удаления
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

//Рендер кнопок и карточек по поиску.
function renderPaginationOnSearch(query, queryPage) {
  apiService.query = query;
  apiService.page = queryPage;
  apiService.fetchMoviesySearch().then(({ results, total_pages }) => {
    if (results.length === 0) {
      refs.inputError.textContent =
        "Search result not successful. Enter the correct movie name and smile : )";
      return;
    }
    clearFilmsContainer();
    appendFilmsMarkup(results, refs.filmsContainerIndex);
    resetButtons();
    renderButtons(apiService.page, total_pages);
  });
}

//Рендер кнопок и карточек популярных фильмов
function renderPaginationPopular() {
  apiService.page = page;
  apiService.fetchPopular().then(({ results, total_pages }) => {
    clearFilmsContainer();
    appendFilmsMarkup(results, refs.filmsContainerIndex);
    resetButtons();
    renderButtons(apiService.page, total_pages);
  });
}

//Чё рендерить-то - популярные или поиск? Вот функция и разбирается
//Заодно после рендера поднимает вьюпорт в самый верх
function isQueryOrPopular() {
  if (apiService.query === "") {
    renderPaginationPopular();
    moveToTop();
    return;
  } else {
    renderPaginationOnSearch(apiService.query, page);
    moveToTop();
  }
}

//функция для поднятия в небеса
function moveToTop() {
  window.scrollTo(pageXOffset, 0);
}

export { renderButtons, renderPaginationOnSearch };
