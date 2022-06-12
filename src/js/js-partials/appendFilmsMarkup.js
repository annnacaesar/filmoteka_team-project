import filmCard from '../../templates/films.hbs';

const galleryRef = document.querySelector('.films__container');

export default function appendFilmsMarkup(films) {
  galleryRef.insertAdjacentHTML('beforeend', filmCard(films));
}