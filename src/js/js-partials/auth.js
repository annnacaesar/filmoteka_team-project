import { firebaseConfig } from "./firebase";

const btnAuth = document.querySelector('#modal-btn-auth');
const backdrop = document.querySelector('.auth__backdrop');
const error = document.querySelector('#js-auth__error');

btnAuth.addEventListener('click', onOpenAuth);
	
function firebaseFetch(token) {
    if (!token) {
      return Promise.resolve(`<p class="error"> you don't have a token</p>`)
    }
    return fetch(`https://filmoteka-209ce-default-rtdb.firebaseio.com/films.json?auth=${token}`).then(response => response.json()).then(response => {
      console.log('films:', response)
      if (response && response.error) {
        return `<p class="error">${response.error}</p>`;
      }

      return response ? Object.keys(response).map(key =>({...response[key], id : key})) : []
    })
  }

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

function addToLocalStorage(film) {
  const all = getFilmsToLocalStorage();
  console.log(all);
  all.push(film)
  save('film', all)
}

function getFilmsToLocalStorage() {
  return JSON.parse(localStorage.getItem('film') || '[]')
}

function authWithEmailAndPassword(email, password) {
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`, {
    method: "POST",
    body: JSON.stringify({ email, password, returnSecureToken: true }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json()).then(data => data.idToken)
}

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

	const email = e.target.querySelector("#email").value.trim();
	const password = e.target.querySelector("#password").value.trim();

	authWithEmailAndPassword(email, password).then(token => 
		firebaseFetch(token)
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

// function firebaseCreate(film) {
//     return fetch('https://filmoteka-209ce-default-rtdb.firebaseio.com/films.json', {
//       method: "POST",
//       body: JSON.stringify(film),
//       header: {
//         'Content-Type': 'application/json',
//       }
//     }).then(response => response.json())
//       .then(response => {
//         film.nameId = response.name;
//         return film;
//       })
//       .then(film => addToLocalStorage(film))
// }

	//--on btn click
	//import { firebaseCreate } from "./auth";

// 56   firebaseCreate(fetch);
