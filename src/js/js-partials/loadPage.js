import { isQueryOrPopular } from "./pagination";

const logo = document.querySelector(".logo");
const btnAuth = document.querySelector('#modal-btn-auth');
const btnRecord = document.querySelector('#modal-btn-record');
const library = document.querySelector('.nav__item-auth');

window.addEventListener("load", loadPage);
logo.addEventListener("click", loadPopularPage);

export default function loadPage() {
  let query = sessionStorage.getItem("query");
  let page = sessionStorage.getItem("page");
  let signIn = sessionStorage.getItem('sign-in');
  if (query === null) query = "";
  if (page === null) page = 1;
  if (!signIn) {
    library.classList.add('visually-hidden');
  } else {
    btnAuth.textContent = 'log out';
    library.classList.remove('visually-hidden');
    btnRecord.classList.add('visually-hidden');
  } 


  isQueryOrPopular(query, Number(page));
}

function loadPopularPage(e) {
  e.preventDefault();
  const query = "";
  const page = 1;
  isQueryOrPopular(query, page);
}
