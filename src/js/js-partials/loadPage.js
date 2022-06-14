import ApiService from './API';
import appendFilmsMarkup from './appendFilmsMarkup';

const apiService = new ApiService();
const filmsContainerIndex = document.querySelector('.js-films-list-index');

window.addEventListener('load', loadPage);

export default function loadPage () {
	apiService.fetchPopular().then(({ results }) => {
		appendFilmsMarkup(results, filmsContainerIndex);
	});
}