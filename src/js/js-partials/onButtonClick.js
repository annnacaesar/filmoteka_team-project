let fetch = {};
const watched = localStorage.getItem(`allWatchedMovies`);
const queue = localStorage.getItem(`allQueueMovies`);
export const allWatched = watched ? JSON.parse(watched) : [];
export const allQueue = queue ? JSON.parse(queue) : [];


export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

export const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

function createConst(obj) {
  fetch = obj;
}

function addWatched() {
  const addWatchedBtn = document.querySelector(".btn-watch");
  addWatchedBtn.addEventListener("click", onAddWatchedClick);
}

function textContentWatched(id) {
  const activeBtn = document.querySelector('.btn-watch');
  const savedId = load("allWatchedMovies");
  if (savedId) {
    const getUserWithEmail = savedId.find(movie => movie.id === id);
    if (getUserWithEmail) {
    activeBtn.classList.add("is-active")
    activeBtn.textContent = "Remove from watched"
  }
  }
  
  
}

function onAddWatchedClick(e) {
  const currentActiveBtn = document.querySelector(".btn-watch.is-active");
  const savedLocalInfo = load("allWatchedMovies");
  e.currentTarget.classList.toggle("is-active");

  if (currentActiveBtn) {
    let index;
    savedLocalInfo.forEach(({ id }, i) => (id === fetch.id ? (index = i) : i));
    allWatched.splice(index, 1);
    save(`allWatchedMovies`, allWatched);
  }
 
  const isInArray = savedLocalInfo
    ? savedLocalInfo.find(({ id }) => id === fetch.id)
    : false;
  
  e.currentTarget.textContent = "add to Watched";

  if (!!isInArray) {
    return;
  }

  e.currentTarget.textContent = "Remove from watched";
  allWatched.push(fetch);
  save(`allWatchedMovies`, allWatched);
}

function addQueue() {
  const addWatchedBtn = document.querySelector(".btn-queue");
  addWatchedBtn.addEventListener("click", onAddQueueClick);
}

function textContentQueue(id) {
  const activeBtn = document.querySelector('.btn-queue');
  const savedId = load("allQueueMovies");
  if (savedId) {
    const getUserWithEmail = savedId.find(movie => movie.id === id);
    if (getUserWithEmail) {
    activeBtn.classList.add("is-active")
    activeBtn.textContent = "remove from queue"
  }
  }
  
 
}

function onAddQueueClick(e) {
  const currentActiveBtn = document.querySelector(".btn-queue.is-active");
  const savedLocalInfo = load("allQueueMovies");
  e.currentTarget.classList.toggle("is-active");

  if (currentActiveBtn) {
    let index;
    savedLocalInfo.forEach(({ id }, i) => (id === fetch.id ? (index = i) : i));
    allQueue.splice(index, 1);
    save(`allQueueMovies`, allQueue);
  }

  const isInArray = savedLocalInfo
    ? savedLocalInfo.find(({ id }) => id === fetch.id)
    : false;
  
  e.currentTarget.textContent = "add to Queue";

  if (!!isInArray) {
    return;
  }

  e.currentTarget.textContent = "Remove from Queue";
  allQueue.push(fetch);
  save(`allQueueMovies`, allQueue);
}

export { createConst, addWatched, addQueue, textContentWatched, textContentQueue };
