import filmCard from "../../templates/films.hbs";
import { normalizationMovieObj } from "./normalization-obj";


export default function appendFilmsMarkup(films, page) {
  
  const normalObjs = films.map(element => {
    let temp = normalizationMovieObj(element);
    temp.genre.length <= 3
      ? (temp.genre = temp.genre.join(", "))
      : (temp.genre = [temp.genre[0], temp.genre[1], "Other"].join(", "));
    return temp;
  });
  page.insertAdjacentHTML("beforeend", filmCard(normalObjs));
}
