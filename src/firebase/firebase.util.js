import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAei3vVwQkpCqGk0uCzC_VWtHzP8wN_Zio",
  authDomain: "ecommerce-clothing-362eb.firebaseapp.com",
  projectId: "ecommerce-clothing-362eb",
  storageBucket: "ecommerce-clothing-362eb.appspot.com",
  messagingSenderId: "984605335835",
  appId: "1:984605335835:web:fc0176c78899b8825273be",
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setting Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
