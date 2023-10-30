// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3-F6SDyVJP8UI_1jqLhHiUymqRfnfkwQ",
  authDomain: "myrecomendations-2ab99.firebaseapp.com",
  projectId: "myrecomendations-2ab99",
  storageBucket: "myrecomendations-2ab99.appspot.com",
  messagingSenderId: "133798018445",
  appId: "1:133798018445:web:9c161c9bc7601eb40351c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)