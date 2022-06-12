const API_KEY = `7cb8097836a7a1f4e5c19953961668c8`;
const BASE_URL = `https://api.themoviedb.org/3/`;

// приклад запиту https://api.themoviedb.org/3/movie/550?api_key=7cb8097836a7a1f4e5c19953961668c8

const VIDEO_BY_SEACH = `${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false`;

export default class MovieApiService {
  constructor() {
    this.searchQuery = "";
    this.currentPage = 1;
    this.language = "en-US";
    this.genres = "";
    this.movieId = 0;
  }

  // ======== search films =========

  fetchMoviesySearch() {
    return fetch(
      `${VIDEO_BY_SEACH}&query=${this.searchQuery}&language=${this.language}&page=${this.page}`
    ).then(responce => responce.json());
  }

  async fetchPopular() {
    const urlPopular = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
    return fetch(urlPopular).then(responce => responce.json());
  }

  async getMovieDetails(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    return fetch(url).then(res => res.json());
  }

  async fetchById() {
    const responce = await fetch(
      `${BASE_URL}/movie/${this.movieId}?api_key=${API_KEY}`
    );
    const data = await responce.json();
    return data;
  }

  async fetchTrailer(id) {
    const responce = await fetch(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    const data = await responce.json();
    return data;
  }

  getMoviedId(newId) {
    this.movieId = newId;
  }

  getItemFromLS(key) {
    return localStorage.getItem(key);
  }

  addMovie(movieObj, key) {
    let existingEntries = JSON.parse(this.getItemFromLS(key));
    if (existingEntries === null) existingEntries = [];
    existingEntries.push(movieObj);
    return localStorage.setItem(key, JSON.stringify(existingEntries));
  }

  deleteMovie(key) {
    let existingEntries = JSON.parse(this.getItemFromLS(key));
    const newEntries = existingEntries.filter(
      el => el.id !== Number(this.movieId)
    );
    existingEntries = newEntries;

    return localStorage.setItem(key, JSON.stringify(existingEntries));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get page() {
    return this.currentPage;
  }

  set page(page) {
    this.currentPage = page;
  }
}