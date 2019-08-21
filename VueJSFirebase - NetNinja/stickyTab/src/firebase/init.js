import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "Your own api key",
    authDomain: "Your own auth domain",
    databaseURL: "Your own database url",
    projectId: "Your own project id",
    storageBucket: "Your own storage bucket ref",
    messagingSenderId: "Your own messaging sender id",
    appId: "Your own app id"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Export Firestore Database
export default firebaseApp.firestore()
