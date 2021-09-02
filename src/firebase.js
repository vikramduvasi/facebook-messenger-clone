/** import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBXncb5eMs2n9GtYWK24VDzn7rN6X3EbnA",
    authDomain: "facebook-messenger-clone-d9380.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-d9380.firebaseio.com",
    projectId: "facebook-messenger-clone-d9380",
    storageBucket: "facebook-messenger-clone-d9380.appspot.com",
    messagingSenderId: "733627405883",
    appId: "1:733627405883:web:b6540496a909fffb516e1e",
    measurementId: "G-8YLJRN1ER6"
})
    const db = firebaseApp.firestore();

    export default db;

    */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
const firebaseConfig = {
  apiKey: "AIzaSyDOwQeI5xnXmWldmzYMWC_FZMy87Zz6V08",
  authDomain: "messenger-clone1-5366d.firebaseapp.com",
  projectId: "messenger-clone1-5366d",
  storageBucket: "messenger-clone1-5366d.appspot.com",
  messagingSenderId: "149825489837",
  appId: "1:149825489837:web:55e0e47b3a195e9ce4ef24",
  measurementId: "G-QJ2NYH5CMJ"
};

*/

const firebaseConfig = {
    apiKey: "AIzaSyDOwQeI5xnXmWldmzYMWC_FZMy87Zz6V08",
    authDomain: "messenger-clone1-5366d.firebaseapp.com",
    projectId: "messenger-clone1-5366d",
    storageBucket: "messenger-clone1-5366d.appspot.com",
    messagingSenderId: "149825489837",
    appId: "1:149825489837:web:55e0e47b3a195e9ce4ef24",
    measurementId: "G-QJ2NYH5CMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);