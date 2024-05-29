import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "Your own api key",
    authDomain: "Your own auth domain",
    databaseURL: "Your own database url",
    projectId: "Your own project id",
    storageBucket: "Your own storage bucket reference",
    messagingSenderId: "Your own messaging sender id",
    appId: "Your own api id"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
