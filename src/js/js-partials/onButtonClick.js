let currentActiveBtn = "";

function addWatched() {
  const addWatchedBtn = document.querySelector(".btn-watch");
  addWatchedBtn.addEventListener("click", onAddWatchedClick);
}

function onAddWatchedClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  currentActiveBtn = document.querySelector(".modal__button-active");
  const addWatchedId = e.currentTarget.parentNode.dataset.id;

  e.currentTarget.textContent = "Remove from watched";
  e.currentTarget.classList.toggle("modal__button-active");

  if (currentActiveBtn) {
    e.currentTarget.textContent = "add to Watched";
  }

  localStorage.setItem("watchedMovies", JSON.stringify(addWatchedId));
}

function addQueue() {
  const addWatchedBtn = document.querySelector(".btn-queue");
  addWatchedBtn.addEventListener("click", onAddQueueClick);
}

function onAddQueueClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  currentActiveBtn = document.querySelector(".modal__button-active");
  const addQueueId = e.currentTarget.parentNode.dataset.id;

  e.currentTarget.textContent = "Remove from Queue";
  e.currentTarget.classList.toggle("modal__button-active");

  if (currentActiveBtn) {
    e.currentTarget.textContent = "add to Queue";
  }

  localStorage.setItem("queueMovies", JSON.stringify(addQueueId));
}

export { addWatched, addQueue };
