import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1RxVW0E4eDBTuZgA0v8KCW-f3-3J7HNY",
    authDomain: "stickytabs-7dd74.firebaseapp.com",
    databaseURL: "https://stickytabs-7dd74.firebaseio.com",
    projectId: "stickytabs-7dd74",
    storageBucket: "stickytabs-7dd74.appspot.com",
    messagingSenderId: "278976374223",
    appId: "1:278976374223:web:8a83a5c35b19abd6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Export Firestore Database
export default firebaseApp.firestore()