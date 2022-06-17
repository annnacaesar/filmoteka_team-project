// fetch(
//   `https://api.themoviedb.org/3/movie/550?api_key=7cb8097836a7a1f4e5c19953961668c8`
// ).then(response => response.json());
const refs = {
  arrowLeft: document.querySelector("button[aria-label='previous-page'"),
  arrowRight: document.querySelector("button[aria-label='next-page'"),
  pagination: document.querySelector(".pagination"),
  firstButton: document.querySelector(".firstButton-and-threeDots"),
  lastButton: document.querySelector(".lastButton-and-threeDots"),
};
let pageNumber = 1;
// const pageButtons = document.querySelector("button[aria-label='next-page'");
// function getNumberOfPages(data) {
//   const numberOfPages = data.totalPages;
//   return numberOfPages;
// }
// function handleClickPage(event) {
//   if (event.target === event.currentTarget) return;
//   const { page } = event.target.dataset;
//   const currentPage = page;
// }
// function renderButtons(numberOfPages) {
//   pageButtons.innerHTML = "";
// }

// const buttonPoints = document.querySelectorAll(".hidden-in-mobile");
// buttonPoints.forEach(button => {
//   button.classList.add("visually-hidden");
// });

function renderButtons() {
  let beforeActivePage = pageNumber - 2;
  let afterActivePage = pageNumber + 2;
  if (beforeActivePage < 3) {
    beforeActivePage = 1;
    afterActivePage = 5;
  }
  for (let i = beforeActivePage; i <= afterActivePage; i += 1) {
    if (i === pageNumber) {
      const pageButton = `<button id="paginationButton" data-page="${i}" class="button-page paginationButton active">${i}</button>`;
      refs.pagination.insertAdjacentHTML("beforeend", pageButton);
    } else {
      const pageButton = `<button id="paginationButton" data-page="${i}" class="button-page paginationButton">${i}</button>`;
      refs.pagination.insertAdjacentHTML("beforeend", pageButton);
    }
  }

  if (beforeActivePage >= 3) {
    if (isThreeDots()) {
      return;
    } else {
      const firstButton = `<button id="paginationButton" data-page="1" class="button-page paginationButton">1</button>`;
      const threeDots = `<span class='page-buttons__points'>···</span>`;
      refs.firstButton.insertAdjacentHTML("beforeend", firstButton);
      refs.firstButton.insertAdjacentHTML("beforeend", threeDots);
    }
  }
  if (beforeActivePage < 3 && isThreeDots()) {
    refs.firstButton.innerHTML = "";
  }
}

function onClickArrowLeft() {
  if (pageNumber === 1) {
    return;
  }
  pageNumber -= 1;
  resetButtons();
  renderButtons();
}
function onClickArrowRight() {
  pageNumber += 1;
  resetButtons();
  renderButtons();
}

function resetButtons() {
  refs.pagination.innerHTML = "";
}

function onClickButton(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) return;
  pageNumber = Number(event.target.dataset.page);
  resetButtons();
  renderButtons();
}

function isThreeDots() {
  const isThreeDots = document.querySelector(".page-buttons__points");
  if (isThreeDots === null) {
    return false;
  }
  return true;
}
renderButtons();
refs.arrowLeft.addEventListener("click", onClickArrowLeft);
refs.arrowRight.addEventListener("click", onClickArrowRight);
refs.pagination.addEventListener("click", onClickButton);
