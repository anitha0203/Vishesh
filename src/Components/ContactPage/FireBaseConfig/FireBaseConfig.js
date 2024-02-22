// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD4QvHHEDaUso-INmTff0BsGfQx7t0fso",
    authDomain: "vishesh-14702.firebaseapp.com",
    projectId: "vishesh-14702",
    storageBucket: "vishesh-14702.appspot.com",
    messagingSenderId: "1077128464309",
    appId: "1:1077128464309:web:58ea952a4736e0616b3bfc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const FireBaseDatabase = firebase.firestore();
export default FireBaseDatabase;