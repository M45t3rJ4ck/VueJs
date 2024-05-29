import firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "Your own api key",
  authDomain: "Your own auth domain",
  databaseURL: "Your own database url",
  projectId: "Your own project id",
  storageBucket: "Your own storage bucket ref",
  messagingSenderId: "Your own messaging sender id",
  appId: "Your own app id",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
