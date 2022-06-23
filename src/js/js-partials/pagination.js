import appendFilmsMarkup from "./appendFilmsMarkup";
import clearFilmsContainer from "./clearFilmsContainer";
import MovieApiService from "./API";
import { dispaySpan } from "./searchSpan";

const apiService = new MovieApiService();

const refs = {
  arrowLeft: document.querySelector("button[aria-label='previous-page'"),
  arrowRight: document.querySelector("button[aria-label='next-page'"),
  buttons: document.querySelector(".pagination__container--buttons"),
  firstButton: document.querySelector(".pagination__container--first-button"),
  lastButton: document.querySelector(".pagination__container--last-button"),
  filmsContainerIndex: document.querySelector(".js-films-list-index"),
  inputError: document.querySelector(".input__error"),
  searchSpan: document.querySelector(".search-span"),
  pagination: document.querySelector(".pagination"),
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

  //частный случай, который не попадает ни в одно из условий, которые есть в этом файле
  //(охренеть просто)

  if (page + 3 === totalPages) {
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
      const pageButton = `<button data-page="${i}" class="pagination__button active">${i}</button>`;
      refs.buttons.insertAdjacentHTML("beforeend", pageButton);
    } else {
      const pageButton = `<button data-page="${i}" class="pagination__button">${i}</button>`;
      refs.buttons.insertAdjacentHTML("beforeend", pageButton);
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
    refs.lastButton.style.marginRight = 0;

    return;
  } else if (isLastThreeDots()) {
    return;
  } else {
    renderLastButtonAndDots(totalPages);
  }

  //удобная замена для слушателей
  // refs.arrowLeft.onclick = onClickArrowLeft;
  // refs.arrowRight.onclick = onClickArrowRight;
  // refs.buttons.onclick = onClickButton;
  // refs.firstButton.onclick = onClickFirstButton;
  // refs.lastButton.onclick = onClickLastButton;
}

refs.pagination.addEventListener("click", onClickPagination);

function onClickPagination(event) {
  //если клик не в кнопку, а в див - ничо не делаем.
  if (event.target === event.currentTarget) return;
  console.dir(event.target);
  console.dir(event.currentTarget);
  console.log(event.target.classList);

  // левая стрелка
  if (event.target.ariaLabel === "previous-page") {
    onClickArrowLeft();
    return;
  }
  // правая стрелка
  if (event.target.ariaLabel === "next-page") {
    onClickArrowRight();
    return;
  }
  //первая кнопка-цифра (перед точками)
  if (
    event.target.parentElement.classList.contains(
      "pagination__container--first-button"
    )
  ) {
    onClickFirstButton(event);
    return;
  }
  //последняя кнопка-цифра (после точек)
  if (
    event.target.parentElement.classList.contains(
      "pagination__container--last-button"
    )
  ) {
    onClickLastButton(event);
    return;
  }
  //все остальные кнопки
  if (
    event.target.parentElement.classList.contains(
      "pagination__container--buttons"
    )
  ) {
    onClickButton(event);
    return;
  }
}

function onClickFirstButton(event) {
  if (event.target.nodeName === "BUTTON") {
    page = 1;

    isQueryOrPopular(apiService.query, page);
  }
}

function onClickLastButton(event) {
  if (event.target.nodeName === "BUTTON") {
    page = totalPages;

    isQueryOrPopular(apiService.query, page);
  }
}

function onClickArrowLeft() {
  if (page === 1) return;
  page -= 1;
  isQueryOrPopular(apiService.query, page);
}

function onClickArrowRight() {
  if (page === totalPages) return;

  page += 1;
  isQueryOrPopular(apiService.query, page);
}

function resetButtons() {
  refs.buttons.innerHTML = "";
  refs.firstButton.innerHTML = "";
  refs.lastButton.innerHTML = "";
}

function onClickButton(event) {
  event.preventDefault();
  //если клик не в кнопку, а в див - ничо не делаем. Позже кнопку расширю паддингами
  if (event.target === event.currentTarget) return;
  page = Number(event.target.dataset.page);
  isQueryOrPopular(apiService.query, page);
}

//проверка существования точек после первой кнопки
//нужно для их рендера или удаления
function isFirstThreeDots() {
  const isThreeDots = document.querySelector(".pagination__points--first");
  if (isThreeDots === null) {
    return false;
  }
  return true;
}

//проверка существования точек перед последней кнопкой
//нужно для их рендера или удаления
function isLastThreeDots() {
  const isThreeDots = document.querySelector(".pagination__points--last");
  if (isThreeDots === null) {
    return false;
  }
  return true;
}

function renderFirstButtonAndDots() {
  const firstButton = `<button data-page="1" class="pagination__button">1</button>`;
  const threeDots = `<span class='pagination__points--first'>···</span>`;
  refs.firstButton.insertAdjacentHTML("beforeend", firstButton);
  refs.firstButton.insertAdjacentHTML("beforeend", threeDots);
}

function renderLastButtonAndDots(totalPages) {
  const lastButton = `<button data-page="${totalPages}" class="pagination__button">${totalPages}</button>`;
  const threeDots = `<span class='pagination__points--last'>···</span>`;
  refs.lastButton.insertAdjacentHTML("beforeend", threeDots);
  refs.lastButton.insertAdjacentHTML("beforeend", lastButton);
  refs.lastButton.style.marginRight = "10px";
}

//Рендер кнопок и карточек по поиску.
function renderPaginationOnSearch(query, queryPage) {
  apiService.query = query;
  apiService.page = queryPage;
  sessionStorage.setItem("query", query);
  sessionStorage.setItem("page", queryPage);
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
function renderPaginationPopular(pagePopular) {
  page = pagePopular;
  apiService.page = page;
  apiService.query = "";
  sessionStorage.setItem("query", apiService.query);
  sessionStorage.setItem("page", page);
  apiService.fetchPopular().then(({ results, total_pages }) => {
    clearFilmsContainer();
    appendFilmsMarkup(results, refs.filmsContainerIndex);
    resetButtons();
    renderButtons(apiService.page, total_pages);
  });
}

//Чё рендерить-то - популярные или поиск? Вот функция и разбирается
//Заодно после рендера поднимает вьюпорт в самый верх
function isQueryOrPopular(query, page) {
  if (query === "") {
    dispaySpan(query, page);
    renderPaginationPopular(page);
    moveToTop();
    return;
  } else {
    dispaySpan(query, page);
    renderPaginationOnSearch(query, page);
    moveToTop();
  }
}

//функция для поднятия в небеса
function moveToTop() {
  window.scrollTo(scrollX, 0);
}

export { renderButtons, renderPaginationOnSearch, isQueryOrPopular };
