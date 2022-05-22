// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2z7xvJ7xkgxOMCXsCjmwkoibvUkWFlKw",
  authDomain: "dmngram-clone.firebaseapp.com",
  projectId: "dmngram-clone",
  storageBucket: "dmngram-clone.appspot.com",
  messagingSenderId: "802727675447",
  appId: "1:802727675447:web:e2e929dd8a52bf1f40a1b2",
  measurementId: "G-93T9KVJBME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();
const auth = getAuth();
export { auth };
export default db;