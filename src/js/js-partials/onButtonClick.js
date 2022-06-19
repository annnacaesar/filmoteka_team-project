let currentActiveBtn = "";
let fetch = {};
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
  localStorage.removeItem(key);
};

export function createConst(obj) {
  fetch = obj;
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

  // watched.id = addWatchedId;
  // console.log(watched);
  save(`watchedMovies`, fetch);
  const savedLocalInfo = load("watchedMovies");
  allWatched.push(savedLocalInfo);
  save(`allWatchedMovies`, allWatched);

  // if (savedLocalInfo) {
  //   let watchedArr = JSON.parse(localStorage.getItem("allWatchedMovies"));

  //   const allWatchedId = watchedArr
  //     .map(watched => watched.id)
  //     .filter((id, i, array) => array.indexOf(id) === i);
  //   save(`allWatchedMovies`, allWatchedId);
  //   // console.log("allWatchedId: ", allWatchedId);
  // }
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

  // queue.id = addQueueId;
  // console.log(queue);
  save(`queueMovies`, fetch);
  const savedLocalInfo = load("queueMovies");
  allQueue.push(savedLocalInfo);
  save(`allQueueMovies`, allQueue);

  // if (savedLocalInfo) {
  //   let queueArr = JSON.parse(localStorage.getItem("allQueueMovies"));

  //   const allQueuedId = queueArr
  //     .map(queued => queued.id)
  //     .filter((id, i, array) => array.indexOf(id) === i);
  //   save(`allQueueMovies`, allQueuedId);
  //   // console.log("allQueueId: ", allQueuedId);
  // }
}

export { addWatched, addQueue };
