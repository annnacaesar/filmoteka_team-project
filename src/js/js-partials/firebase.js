// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3mAeoJSkVgXp7W5wSmHtE9e1wFGsySmc",
  authDomain: "filmoteka-209ce.firebaseapp.com",
  projectId: "filmoteka-209ce",
  storageBucket: "filmoteka-209ce.appspot.com",
  messagingSenderId: "68393581409",
  appId: "1:68393581409:web:5521fb7cea0b94cd42e320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class Firebase {
  create(film) {
    return fetch('https://filmoteka-209ce-default-rtdb.firebaseio.com/films.json', {
      method: "POST",
      body: JSON.stringify(film),
      header: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(response => {
        film.nameId = response.name;
        return film;
      })
      .then(film => addToLocalStorage(film))

  }

  fetch(token) {
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
}

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const remove = key => {
  localStorage.removeItem(key);
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

export { Firebase, authWithEmailAndPassword };