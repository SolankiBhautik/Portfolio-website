// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGvIMegx7dsMLKoxaL8ZZ8A_1kAJ7D05A",
  authDomain: "solanki-bhautik-portfolio.firebaseapp.com",
  projectId: "solanki-bhautik-portfolio",
  storageBucket: "solanki-bhautik-portfolio.appspot.com",
  messagingSenderId: "396765453546",
  appId: "1:396765453546:web:0e5f1376d4f3677d11cb93",
  measurementId: "G-LCZB7QF1TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    app,
    db,
}