// import filmCard from '../../templates/films.hbs';

// const galleryRef = document.querySelector('.films__container');

// export default function appendFilmsMarkup(films) {
//   galleryRef.insertAdjacentHTML('beforeend', filmCard(films));
// }

import filmCard from "../../templates/films.hbs";
import { normalizationMovieObj } from "./normalization-obj";
const galleryRef = document.querySelector(".films__container");

export default function appendFilmsMarkup(films) {
  console.log(films);
  const normalObjs = films.map(element => {
    let temp = normalizationMovieObj(element);

    temp.genre.length <= 3
      ? (temp.genre = temp.genre.join(", "))
      : (temp.genre = [temp.genre[0], temp.genre[1], "Other"].join(", "));
    return temp;
  });
  console.log(normalObjs);
  galleryRef.insertAdjacentHTML("beforeend", filmCard(normalObjs));
}
