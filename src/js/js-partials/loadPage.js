import { isQueryOrPopular } from "./pagination";

const logo = document.querySelector(".logo");
const btnAuth = document.querySelector('#modal-btn-auth');

window.addEventListener("load", loadPage);
logo.addEventListener("click", loadPopularPage);

export default function loadPage() {
  let query = sessionStorage.getItem("query");
  let page = sessionStorage.getItem("page");
  let signIn = sessionStorage.getItem('sign-in');
  if (query === null) query = "";
  if (page === null) page = 1;
  if (signIn) btnAuth.textContent = 'log out';
  isQueryOrPopular(query, Number(page));
}

function loadPopularPage(e) {
  e.preventDefault();
  const query = "";
  const page = 1;
  isQueryOrPopular(query, page);
}
