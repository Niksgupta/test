import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_QFC11f_fQujLm0m1YT5i6xCkX0oMsTY",
    authDomain: "nikhil-3aa31.firebaseapp.com",
    projectId: "nikhil-3aa31",
    storageBucket: "nikhil-3aa31.appspot.com",
    messagingSenderId: "1099013349742",
    appId: "1:1099013349742:web:f8137a330cb847f755e17f"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

export {db, auth};