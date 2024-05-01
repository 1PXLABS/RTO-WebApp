// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACAh2pFDJfcgzRojFQDz5hC9LaDIVQMBw",
  authDomain: "galli-cricket-association.firebaseapp.com",
  databaseURL: "https://galli-cricket-association-default-rtdb.firebaseio.com",
  projectId: "galli-cricket-association",
  storageBucket: "galli-cricket-association.appspot.com",
  messagingSenderId: "911455068679",
  appId: "1:911455068679:web:97a0f98f28a0909f2700a2",
  measurementId: "G-YHE86KSYSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();


export { app, auth, db, collection};
