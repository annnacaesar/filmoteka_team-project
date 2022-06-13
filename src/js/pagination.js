fetch(
  `https://api.themoviedb.org/3/movie/550?api_key=7cb8097836a7a1f4e5c19953961668c8`
).then(response => response.json());

const pageButtons = document.querySelector("#page-buttons");
function getNumberOfPages(data) {
  const numberOfPages = data.totalPages;
}

function renderButtons(numberOfPages) {
  pageButtons.innerHTML = "";
}

// const buttonPoints = document.querySelectorAll(".hidden-in-mobile");
// buttonPoints.forEach(button => {
//   button.classList.add("visually-hidden");
// });
