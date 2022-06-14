// fetch(
//   `https://api.themoviedb.org/3/movie/550?api_key=7cb8097836a7a1f4e5c19953961668c8`
// ).then(response => response.json());
const pageButtons = document.querySelector("button[aria-label='next-page'");
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

function renderButtons(pageNumber) {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  if (screenWidth < 768) {
    let numberOfPages = pageNumber + 4;
  } else {
    let numberOfPages = pageNumber + 6;
  }
  for (let i = pageNumber; i <= numberOfPages; i += 1) {
    const pageButton = `<button data-page="${i}" class="button-page">${i}</button>`;
    pageButtons.insertAdjacentHTML("beforebegin", pageButton);
  }
}
renderButtons(2);
