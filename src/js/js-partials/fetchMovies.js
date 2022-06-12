import ApiService from './API';
import appendFilmsMarkup from './appendFilmsMarkup';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = new SimpleLightbox(".films__link");
const apiService = new ApiService();


export default function fetchMovies() {
	apiService.fetchMoviesySearch().then(films => {
		appendFilmsMarkup(films);
		gallery.refresh();
	});
}