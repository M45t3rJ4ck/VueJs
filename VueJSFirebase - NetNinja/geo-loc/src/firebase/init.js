import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "Your own api key",
    authDomain: "Your own authenticated domian",
    databaseURL: "Your own database reference",
    projectId: "Your own projectid",
    storageBucket: "Your own storage bucket reference",
    messagingSenderId: "Your own messaging sender id",
    appId: "Your own app id"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
