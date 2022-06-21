import filmCard from '../../templates/films.hbs';

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

console.log(load('allQueueMovies'));
const loadQueue = load('allQueueMovies');

const library = document.querySelector('.js-films-list-library');
const queueBtn = document.querySelector('.library__queue-btn');
const watchedBtn = document.querySelector('.library__watched-btn');

queueBtn.addEventListener('click', onQueueBtnClick);

function onQueueBtnClick(e) {
  console.log(load('allQueueMovies'));

//   if (watchedBtn.classList.contains('is-active')) {
//     return;
//     }
  appendFilm(loadQueue);
}

function appendFilm (films) {
  const normalObjs = films.map(film => {
    film.genre.length <= 3
      ? (film.genre = film.genre.join(", "))
      : (film.genre = [film.genre[0], film.genre[1], "Other"].join(", "));
    return film;
  });
  console.log(normalObjs);
  library.innerHTML = '';
  library.insertAdjacentHTML("beforeend", filmCard(normalObjs));
}