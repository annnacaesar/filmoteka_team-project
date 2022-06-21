import { Firebase } from "./firebase";
import { authWithEmailAndPassword } from "./firebase";

const firebase = new Firebase();

const btnAuth = document.querySelector('#modal-btn-auth');
const backdrop = document.querySelector('.auth__backdrop');
const error = document.querySelector('#js-auth__error');


btnAuth.addEventListener('click', onOpenAuth);

function onOpenAuth(e) {
	console.log(btnAuth.textContent);
	if (btnAuth.textContent !== 'log out') {
		backdrop.classList.remove('visually-hidden');
	const form = document.querySelector('.auth__form');
	form.addEventListener('submit', authFormHandler)
	} else {
		sessionStorage.removeItem('sign-in');
		btnAuth.textContent = 'sign in';
	}
	window.addEventListener("keydown", escapeKeyCloseModal);
	backdrop.addEventListener("click", clickForCloseModal);
}

function authFormHandler (e) {
	e.preventDefault();

	const login = e.target.querySelector("#email").value.trim();
	const password = e.target.querySelector("#password").value.trim();

	authWithEmailAndPassword(login, password).then(token => 
		firebase.fetch(token)
	).then(renderModalAfterAuth)
}

function renderModalAfterAuth(content) {
	if (typeof content === 'string') {
		error.textContent = 'INVALID EMAIL OR PASSWORD';
	} else {
		error.textContent = '';
		backdrop.classList.add('visually-hidden');
		btnAuth.textContent = 'log out'
		sessionStorage.setItem('sign-in', 'true');
	}
	console.log(content);
}



function escapeKeyCloseModal(event) {
	if (event.code === "Escape") {
		backdrop.classList.add('visually-hidden');
	}
}

function clickForCloseModal(event) {
	if (event.target === event.currentTarget) {
		backdrop.classList.add('visually-hidden');
	}
}

//-------index
//		<include src="./partials/auth-modal.html"></include>

//----load page
//const btnAuth = document.querySelector('#modal-btn-auth');
//--fn load page
// let signIn = sessionStorage.getItem('sign-in');
//  if (signIn) btnAuth.textContent = 'log out';
  

	//--on btn click
	//import { Firebase } from "./firebase";
// const fireBase = new Firebase();

// 56   fireBase.create(fetch);
