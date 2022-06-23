// import filmCard from "../../templates/library-films.hbs";
import { appendFilm } from "./renderWatchedList";
import { save , load } from "./onButtonClick";
import * as basicLightbox from "basiclightbox";


const library = document.querySelector(".js-films-list-library");
const queueBtn = document.querySelector(".library__queue-btn");
const watchedBtn = document.querySelector(".library__watched-btn");
const filmsContainer = document.querySelector(".films__container");
let newQueue = [];

queueBtn.addEventListener("click", onQueueBtnClick);

function onQueueBtnClick() {
  const loadQueue = load("allQueueMovies");

  if (loadQueue === undefined || loadQueue.length === 0) {
    console.log(12);
    filmsContainer.innerHTML = "";
    emptyLibraryImg = `<div>
      <img class="empty-library-img" src="https://images.everyeye.it/img-notizie/pulp-fiction-cosa-vincent-vega-amsterdam-scopriamolo-insieme-v4-465501-1280x960.jpg" alt="empty-img">
    </div>
    <p class="empty-library-text">Vincent can't find your queue films :(</p>
    `;
    filmsContainer.insertAdjacentHTML("beforeend", emptyLibraryImg);
  return;
} else {
    appendFilm(loadQueue);}
}

// ==============РЕНДЕР МОДАЛКИ================

import * as basicLightbox from "basiclightbox";
import settings from "./settings";
import { addListener } from "./trailer";
const { IMG_URL } = settings;

const ref = {
  cardContainer: document.querySelector(".films__container"),
};

ref.cardContainer.addEventListener("click", onClickCard);

async function onClickCard(e) {
  e.preventDefault();

  // console.log(e.target);
  if (e.target.nodeName !== "DIV" && e.target.nodeName !== "UL") {
    if (e.target.nodeName === "IMG") {
      const id = Number(
        e.target.parentElement.parentElement.parentElement.dataset.id
      );
      // console.log(id);
      // console.log(e.target.parentElement.parentElement.parentElement);
      const allDetails = load("allQueueMovies");
      console.log(allDetails);
      const details = allDetails.find(element => element.id === id);
      console.log(details);
      renderModalQueue(details);
    }
    if (e.target.nodeName === "P") {
      const id = e.target.parentElement.parentElement.parentElement.dataset.id;
      // console.log(e.target.parentElement.parentElement.parentElement);
      const allDetails = load("allQueueMovies");
      const details = allDetails.find(element => element.id === id);
      console.log(details);
      renderModalQueue(details);
    }
  }

  function renderModalQueue({
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
            <button class="modal__button btn-remove-queue">remove from Queue</button>
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
      // console.log(event.target.classList.value);
      if (event.target.classList.value === "basicLightbox__placeholder") {
        modal.close();
      }
    }

    modal.show();
  }

  addListener();

  const removeQueueBtn = document.querySelector('.btn-remove-queue');
  removeQueueBtn.addEventListener('click', onRemoveQueueBtnClick);
}

// ==========УДАЛЕНИЕ ИЗ БИБЛИОТЕКИ============
function onRemoveQueueBtnClick (event) {
  let index;
  newQueue.push(load("allQueueMovies"));
  newQueue.forEach(({ id }, i) => (id === load(`allWatchedMovies`).id ? (index = i) : i));
  newQueue.splice(index, 1);
    save(`allQueueMovies`, newQueue);
    onQueueBtnClick();
    console.log(event.target);
    modal.close();
};
