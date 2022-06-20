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

export class Firebase  {
  static craete(film) {
    return fetch('https://filmoteka-209ce-default-rtdb.firebaseio.com/films.json', {
      method: "POST",
      body: JSON.stringify(film),
      header: {
        'Content-Type' : 'application/json',
      }
    }).then(response => response.json()).then(response => console.log(response))
  }
}