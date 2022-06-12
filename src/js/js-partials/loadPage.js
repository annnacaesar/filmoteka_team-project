import ApiService from './API';
import appendFilmsMarkup from './appendFilmsMarkup';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = new SimpleLightbox(".films__link");
const apiService = new ApiService();

window.addEventListener('load', loadPage);

export default function loadPage () {
	apiService.fetchPopular().then(({ results }) => {
		console.log(results);
		appendFilmsMarkup(results);
		gallery.refresh();
	});
}