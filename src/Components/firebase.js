
import firebase from 'firebase/app';
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDyCSq0wyZeR-iQSCpdE-3OCwAuFBU_vTE",
  authDomain: "alqueria-7ee39.firebaseapp.com",
  projectId: "alqueria-7ee39",
  storageBucket: "alqueria-7ee39.appspot.com",
  messagingSenderId: "175472743352",
  appId: "1:175472743352:web:bb7b60d28b9904805ef54d"
};
// Initialize Firebase
const fireDb = firebase.initializeApp  
 export default fireDB.database().ref();