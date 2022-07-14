// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXD0zFWhvjpCxaNel9aVEc48BO2nWkG9Q",
  authDomain: "react-div.firebaseapp.com",
  projectId: "react-div",
  storageBucket: "react-div.appspot.com",
  messagingSenderId: "592059215611",
  appId: "1:592059215611:web:d99d30b037754c90ed8a5e",
  measurementId: "G-0QLY6QG4C1"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
