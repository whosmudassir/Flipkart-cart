import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDpJ9TWkb9WSgmzmgKU2iBRCVSIAgyHAHA",
  authDomain: "flipkart-b98c8.firebaseapp.com",
  projectId: "flipkart-b98c8",
  storageBucket: "flipkart-b98c8.appspot.com",
  messagingSenderId: "770525807074",
  appId: "1:770525807074:web:ae60e86ade916c8b9839bb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
