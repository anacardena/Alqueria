
import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAC1P3_SScOInQYDtid0Wz59hMLNtnlxfM",
  authDomain: "usuario-aqueria.firebaseapp.com",
  projectId: "usuario-aqueria",
  storageBucket: "usuario-aqueria.appspot.com",
  messagingSenderId: "799651174553",
  appId: "1:799651174553:web:05a9351a57cbfb979f4008",
  measurementId: "G-W569CY9PNQ"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig)
 export const db = fire.firestore() 