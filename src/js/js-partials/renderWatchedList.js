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

window.addEventListener("load", renderLibrary);
watchedBtn.addEventListener("click", renderLibrary);

const loadWatched = load("allWatchedMovies");
console.log(loadWatched);

function renderLibrary(e) {
  const loadWatched = load("allWatchedMovies");
  appendFilm(loadWatched);
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

// --------РЕНДЕР МОДАЛКИ-------

import * as basicLightbox from "basiclightbox";
import settings from "./settings";
// import { createConst, addWatched, addQueue } from "./onButtonClick";
// import { normalizationMovieObj } from "./normalization-obj";
// import { savedLocalInfo } from "./onButtonClick";
import { addListener } from "./trailer";
const { IMG_URL } = settings;

const ref = {
  cardContainer: document.querySelector(".films__container"),
};

ref.cardContainer.addEventListener("click", onClickCard);

async function onClickCard(e) {
  e.preventDefault();

  console.log(e.target);
  if (e.target.nodeName !== "DIV" && e.target.nodeName !== "UL") {
    if (e.target.nodeName === "IMG") {
      const id = Number(e.target.parentElement.parentElement.parentElement.dataset.id);
      console.log(id);
      // console.log(e.target.parentElement.parentElement.parentElement);
      const allDetails = load("allWatchedMovies");
      console.log(allDetails);
      const details = allDetails.find(element => element.id === id);
      console.log(details);
      renderModal(details);
    }
    if (e.target.nodeName === "P") {
      const id = e.target.parentElement.parentElement.parentElement.dataset.id;
      // console.log(e.target.parentElement.parentElement.parentElement);
      const allDetails = load("allWatchedMovies");
      const details = allDetails.find(element => element.id === id);
      console.log(details);
      renderModal(details);
    }
  }

  function renderModal({
    id,
    img,
    title,
    popularity,
    vote,
    votes,
    about,
    genre,
  }) {
    const modal = basicLightbox.create(
      `
    <div class="modal__container">
      <div class="modal__close">
        <div class="modal__close-first"></div>
        <div class="modal__close-second"></div>
      </div>
      <div class="modal-wrap">
        <div class="modal__picture-wrap">
          <img
          class="modal__picture"
          src="${img}"
          alt="film-picture"
          />
          <button class="modal__button-play trailer-button" data-id="${id}">
            <img class="modal__img-play" src="https://www.freepnglogos.com/uploads/play-button-png/play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-27.png" alt="play trailer" width="100" height="100" />
					</button>
        </div>
        <div class="modal__desc-wrap">
          <h2 class="modal-heading">${title}</h2>
          <div class="modal__rating-wrap">
            <ul class="modal__rating-left-list">
              <li class="modal__rating-left-item">Vote / Votes</li>
              <li class="modal__rating-left-item">Popularity</li>
              <li class="modal__rating-left-item">Original Title</li>
              <li class="modal__rating-left-item">Genre</li>
            </ul>
            <ul class="modal__rating-right-list">
              <li class="modal__rating-right-item">
                <span class="modal__rating-right-item--color">${vote}</span> /
                <span class="modal__rating-right-item--shadow">${votes}</span>
              </li>
              <li class="modal__rating-right-item">${popularity}</li>
              <li class="modal__rating-right-item modal__rating-right-item--uppercase">${title}</li>
              <li class="modal__rating-right-item">${genre}</li>
            </ul>
          </div>
          <div class="modal__content-wrap">
            <h4 class="modal__content-heading">About</h4>
            <p class="modal__content">
              ${about}
            </p>
          </div>
          <div class="modal__button-wrap" data-id="${id}">
            <button class="modal__button btn-watch">add to Watched</button>
            <button class="modal__button btn-queue modal__button--transparent">
              add to queue
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
      {
        onShow: modal => {
          window.addEventListener("keydown", escapeKeyCloseModal);
          window.addEventListener("click", clickForCloseModal);
          modal.element().querySelector(".modal__close").onclick = modal.close;
        },
        onClose: modal => {
          window.removeEventListener("keydown", escapeKeyCloseModal);
          window.removeEventListener("click", clickForCloseModal);
        },
      }
    );

    function escapeKeyCloseModal(event) {
      if (event.code === "Escape") {
        modal.close();
      }
    }

    function clickForCloseModal(event) {
      console.log(event.target.classList.value);
      if (event.target.classList.value === "basicLightbox__placeholder") {
        modal.close();
      }
    }

    modal.show();
  }

  addListener();

  // addWatched();

  // addQueue();
}
