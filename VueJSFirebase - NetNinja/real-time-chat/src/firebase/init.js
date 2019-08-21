import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDHGtH3BzPh4uCWeibxh4WAV6ZHiFstCsQ",
    authDomain: "real-time-chat-9f631.firebaseapp.com",
    databaseURL: "https://real-time-chat-9f631.firebaseio.com",
    projectId: "real-time-chat-9f631",
    storageBucket: "real-time-chat-9f631.appspot.com",
    messagingSenderId: "658234226172",
    appId: "1:658234226172:web:ea733bda3cba47d4"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
