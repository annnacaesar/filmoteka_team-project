import filmCard from "../../templates/library-films.hbs";

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};


const library = document.querySelector(".js-films-list-library");
const queueBtn = document.querySelector(".library__queue-btn");
const watchedBtn = document.querySelector(".library__watched-btn");

queueBtn.addEventListener("click", onQueueBtnClick);

function onQueueBtnClick(e) {
  const loadQueue = load("allQueueMovies");
  appendFilm(loadQueue);
}

function appendFilm(films) {
  const normalObjs = films.map(film => {
    film.genre.length <= 3
      ? (film.genre = film.genre.join(", "))
      : (film.genre = [film.genre[0], film.genre[1], "Other"].join(", "));
    return film;
  });
  library.innerHTML = "";
  library.insertAdjacentHTML("beforeend", filmCard(normalObjs));
}
