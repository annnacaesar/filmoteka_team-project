// import Notiflix from "notiflix";
import MovieApiService from "./API.js";
import { refs } from "./refs.js";

const movieApiService = new MovieApiService();

// Notiflix.Notify.init({ position: "center-top" });

refs.filmsList.addEventListener("click", onTrailerBtnClick);

refs.closeButton.addEventListener("click", e => {
  e.preventDefault();
  closeModal();
});

async function onTrailerBtnClick(event) {
  const item = event.target.closest(".trailer-button");

  if (!item) return;

  const link = document.querySelector(".films__item");
  const id = link.dataset.id;
  try {
    const trailerId = await getTrailer(id);
    openModal(trailerId);
  } catch (error) {
    // Notiflix.Notify.failure("Trailer not found");
  }
}

export function openModal(id) {
  refs.trailerWindow.innerHTML = `<iframe
    id="player"
    width="640"
    height="360"
    src="https://www.youtube.com/embed/${id}?autoplay=1"
    frameborder="0"
    allow="autoplay"
    allowfullscreen
  ></iframe>`;

  refs.trailerBackdrop.addEventListener("click", e => {
    if (e.target !== refs.trailerBackdrop) {
      return;
    }
    closeModal();
  });
}

function closeModal() {
  refs.trailerWindow.innerHTML = "";
}

export async function getTrailer(id) {
  const response = await movieApiService.fetchTrailer(id);
  const videoId = response.results[0].key;
  return videoId;
}
