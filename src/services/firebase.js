import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEd8OrGu5VFk9nbhXsrg7wgBvCJqdaRJ0",
  authDomain: "datenbank-cocktails.firebaseapp.com",
  projectId: "datenbank-cocktails",
  storageBucket: "datenbank-cocktails.appspot.com",
  messagingSenderId: "1059268052083",
  appId: "1:1059268052083:web:8fa8fd1eb4b3295a1c1606",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
