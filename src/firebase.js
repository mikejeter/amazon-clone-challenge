import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhliZ7b3AVRPTMKJsZY1yLhAxO2jNczU4",
  authDomain: "clone-challenge-9efb2.firebaseapp.com",
  projectId: "clone-challenge-9efb2",
  storageBucket: "clone-challenge-9efb2.appspot.com",
  messagingSenderId: "662881732125",
  appId: "1:662881732125:web:ba915d9430973a7d7668f4",
  measurementId: "G-XWNVFPX0K0"
});

const db = firebase.firestore();

export { db };