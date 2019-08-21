import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgPwjGhGS02P9vFc2jnAOynfPOt5iEdLc",
    authDomain: "geo-loc-6f11a.firebaseapp.com",
    databaseURL: "https://geo-loc-6f11a.firebaseio.com",
    projectId: "geo-loc-6f11a",
    storageBucket: "geo-loc-6f11a.appspot.com",
    messagingSenderId: "905747695201",
    appId: "1:905747695201:web:ce2259226e917068"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()