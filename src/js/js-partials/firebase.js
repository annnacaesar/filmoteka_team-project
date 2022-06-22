// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { loaderToggle } from "./loader";
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
const auth = getAuth(app);
const btnRecord = document.querySelector('#modal-btn-record');



btnRecord.addEventListener('click', onOpenRecord);
const backdrop = document.querySelector('.record__backdrop');
const errorRecord = document.querySelector('#js-record__error');

function onOpenRecord (e) {
  backdrop.classList.remove('visually-hidden');
	const form = document.querySelector('.record__form');
	form.addEventListener('submit', recordFormHandler, {once: true})
  
	window.addEventListener("keydown", escapeKeyCloseModal);
	backdrop.addEventListener("click", clickForCloseModal);
}

function recordFormHandler(e) {
  e.preventDefault();
  loaderToggle();

  const email = e.target.querySelector("#email").value.trim();
	const password = e.target.querySelector("#password").value.trim();
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    errorRecord.textContent = ''
    backdrop.classList.add('visually-hidden');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    errorRecord.textContent = 'this email is being used'
  }).then(loaderToggle);
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

export { firebaseConfig };

