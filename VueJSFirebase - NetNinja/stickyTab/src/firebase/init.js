import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "Your own api key",
<<<<<<< HEAD
    authDomain: "Your own authenticated domian",
    databaseURL: "Your own database reference",
    projectId: "Your own projectid",
    storageBucket: "Your own storage bucket reference",
=======
    authDomain: "Your own auth domain",
    databaseURL: "Your own database url",
    projectId: "Your own project id",
    storageBucket: "Your own storage bucket ref",
>>>>>>> 60b79e626114720ec1486d9571f0c8449416829f
    messagingSenderId: "Your own messaging sender id",
    appId: "Your own app id"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Export Firestore Database
export default firebaseApp.firestore()
