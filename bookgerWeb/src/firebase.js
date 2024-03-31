// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZfl35W4mAXoVlNpoeHJo9MKbS1QzPz74",
  authDomain: "bookger-f7294.firebaseapp.com",
  projectId: "bookger-f7294",
  storageBucket: "bookger-f7294.appspot.com",
  messagingSenderId: "547274838685",
  appId: "1:547274838685:web:e5f4b5a3ba12a7dd417a74",
};

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
