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
export const db = firebase.firestore();

//creating user from auth sign in

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //if user document not in collection then add new doccument i.e new user
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
//setting Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
