import * as basicLightbox from "basiclightbox";
import ApiService from "./API";
import settings from "./settings";
const { IMG_URL } = settings;

const getImgPath = imgPath => (!imgPath ? `${noImg}` : `${IMG_URL}${imgPath}`);

const apiService = new ApiService();

async function loadImgPath(id) {
  const imgPath = await apiService
    .getMovieDetails(id)
    .then(results => getImgPath(results.poster_path));
  return imgPath;
}
async function filmDetails(id) {
  const details = await apiService.getMovieDetails(id).then(results => results);
  return details;
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
      const id = e.target.parentElement.dataset.id;
      const img = await loadImgPath(id);
      const details = await filmDetails(id);
      renderModal({ id, img, details });
    }
    if (e.target.nodeName === "P") {
      const id = e.target.parentElement.parentElement.dataset.id;
      const img = await loadImgPath(id);
      const details = await filmDetails(id);
      renderModal({ id, img, details });
    }
  }

  function renderModal({ id, img, details }) {
    const genres = details.genres.map(genre => genre.name).join(", ");

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
        </div>
        <div class="modal__desc-wrap">
          <h2 class="modal-heading">${details.title}</h2>
          <div class="modal__rating-wrap">
            <ul class="modal__rating-left-list">
              <li class="modal__rating-left-item">Vote / Votes</li>
              <li class="modal__rating-left-item">Popularity</li>
              <li class="modal__rating-left-item">Original Title</li>
              <li class="modal__rating-left-item">Genre</li>
            </ul>
            <ul class="modal__rating-right-list">
              <li class="modal__rating-right-item">
                <span class="modal__rating-right-item--color">${
                  details.vote_average
                }</span> /
                <span class="modal__rating-right-item--shadow">${
                  details.vote_count
                }</span>
              </li>
              <li class="modal__rating-right-item">${details.popularity.toFixed(
                1
              )}</li>
              <li class="modal__rating-right-item modal__rating-right-item--uppercase">${
                details.original_title
              }</li>
              <li class="modal__rating-right-item">${genres}</li>
            </ul>
          </div>
          <div class="modal__content-wrap">
            <h4 class="modal__content-heading">About</h4>
            <p class="modal__content">
              ${details.overview}
            </p>
          </div>
          <div class="modal__button-wrap" data-id="${id}">
            <button class="modal__button">add to Watched</button>
            <button class="modal__button modal__button--transparent">
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
          modal.element().querySelector(".modal__close").onclick = modal.close;
        },
        onClose: modal => {
          window.removeEventListener("keydown", escapeKeyCloseModal);
        },
      }
    );
    function escapeKeyCloseModal(event) {
      if (event.code === "Escape") {
        modal.close();
      }
    }
    modal.show();
  }
}
