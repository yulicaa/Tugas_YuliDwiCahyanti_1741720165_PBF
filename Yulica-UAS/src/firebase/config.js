import "firebase/auth";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtDLSXs3H-0wMe6vHseu6S_C0VlZcTzjc",
  authDomain: "fir-uas-yulica.firebaseapp.com",
  databaseURL: "https://fir-uas-yulica.firebaseio.com",
  projectId: "fir-uas-yulica",
  storageBucket: "fir-uas-yulica.appspot.com",
  messagingSenderId: "60545336729",
  appId: "1:60545336729:web:08254ac685b104da6c3f08",
  measurementId: "G-W3EH6L2DW8"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
