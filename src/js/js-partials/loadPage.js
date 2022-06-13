import ApiService from './API';
import appendFilmsMarkup from './appendFilmsMarkup';

const apiService = new ApiService();

window.addEventListener('load', loadPage);

export default function loadPage () {
	apiService.fetchPopular().then(({ results }) => {
		console.log(results);
		appendFilmsMarkup(results);
	});
}