import genreList from "./genreList";
import settings from "./settings";
const { IMG_URL } = settings;
import noImg from "../../images/noImageAvailable.jpg";

const getGenreArray = genre_ids => genre_ids.map(el => genreList[`${el}`]);

const getGenreArrayLibrary = genres => genres.map(el => el.name);

export const getImgPath = imgPath =>
  !imgPath ? `${noImg}` : `${IMG_URL}${imgPath}`;

const getDate = date => (!date ? data : date.slice(0, 4));

// -------------------------------------------------------------
export const normalizationMovieObj = ({
  genres = null,
  genre_ids = null,
  id,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  vote_average,
  vote_count,
}) => ({
  genre: genre_ids ? getGenreArray(genre_ids) : getGenreArrayLibrary(genres),
  id: id,
  title: original_title,
  about: overview,
  popularity: popularity,
  img: getImgPath(poster_path),
  releaseDate: release_date ? getDate(release_date) : "",
  vote: vote_average,
  votes: vote_count,
});
