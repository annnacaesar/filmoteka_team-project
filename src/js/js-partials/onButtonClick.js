let currentActiveBtn = "";
const queue = {};
const watched = {};
const allWatched = [];
const allQueue = [];

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const remove = key => {
  localStorage.removeItem(key)
}

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

  // localStorage.setItem(
  //   `watchedMovies ${addWatchedId}`,
  //   JSON.stringify(addWatchedId)
  // );
watched.id = addWatchedId;
  console.log(watched);
  save(`watchedMovies`, watched);
  const savedLocalInfo = load("watchedMovies");
  allWatched.push(savedLocalInfo);
  save(`AllWatchedMovies`, allWatched);
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

  // localStorage.setItem(`queueMovies ${addQueueId}`, JSON.stringify(addQueueId));
  queue.id = addQueueId;
  console.log(queue);
  save(`queueMovies`,queue);
  const savedLocalInfo = load("queueMovies");
  allQueue.push(savedLocalInfo);
  save(`allQueueMovies`,allQueue);
}

export { addWatched, addQueue };
