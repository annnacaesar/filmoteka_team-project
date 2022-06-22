import * as basicLightbox from "basiclightbox";
import ApiService from "./API";
import settings from "./settings";
import {
  createConst,
  addWatched,
  addQueue,
  textContentWatched,
  textContentQueue,
} from "./onButtonClick";
import { addListener } from "./trailer";
import { normalizationMovieObj } from "./normalization-obj";
const { IMG_URL } = settings;

const getImgPath = imgPath => (!imgPath ? `${noImg}` : `${IMG_URL}${imgPath}`);

const apiService = new ApiService();

async function filmDetails(id) {
  const details = await apiService.getMovieDetails(id).then(results => results);
  const normalizeDetails = normalizationMovieObj(details);
  createConst(normalizeDetails);
  return normalizeDetails;
}

const ref = {
  cardContainer: document.querySelector(".films__container"),
};

ref.cardContainer.addEventListener("click", onClickCard);

async function onClickCard(e) {
  e.preventDefault();

  // console.log(e.target);
  if (e.target.nodeName !== "DIV" && e.target.nodeName !== "UL") {
    if (e.target.nodeName === "IMG") {
      const id = e.target.parentElement.parentElement.parentElement.dataset.id;
      // console.log(e.target.parentElement.parentElement.parentElement);
      const details = await filmDetails(id);
      renderModal(details);
    }
    if (e.target.nodeName === "P") {
      const id = e.target.parentElement.parentElement.parentElement.dataset.id;
      // console.log(e.target.parentElement.parentElement.parentElement);
      const details = await filmDetails(id);
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
            <button class="modal__button btn-watch">add to watched</button>
            <button class="modal__button btn-queue">add to queue</button>
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
        if (!modal.element().classList.contains("visually-hidden")) {
          modal.close();
        }
      }
    }

    function clickForCloseModal(event) {
      // console.log(event.target.classList.value);
      if (event.target.classList.value === "basicLightbox__placeholder") {
        modal.close();
      }
    }

    modal.show();
    textContentWatched(id);
    textContentQueue(id);
  }
  const id = e.target.parentElement.parentElement.parentElement.dataset.id;
  addListener(id);

  addWatched();

  addQueue();
}
