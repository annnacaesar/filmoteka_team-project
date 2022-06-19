import { refs } from './refs.js';
//  функція коли в "Queue" i в "Watched" ще нічого не вибрано
const placeholderLibrary = () => {
    refs.filmList.innerHTML = `<div class="div-placeholder">
    Nothing here so far ... </div>`;
}

export { placeholderLibrary };


// if(allQueueMovies.length === 0){
// placeholderLibrary ();
// };

// if(allWachedMovies.length === 0){
// placeholderLibrary ();
// };