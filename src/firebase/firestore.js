import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBopr3G-1C1fm8s-AWURh2QnMPd0Ym3t9o",
  authDomain: "shoes-backend.firebaseapp.com",
  databaseURL: "https://shoes-backend.firebaseio.com",
  projectId: "shoes-backend",
  storageBucket: "shoes-backend.appspot.com",
  messagingSenderId: "232562485617",
  appId: "1:232562485617:web:6d208e3b36fde570bfaed0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default firebase;
