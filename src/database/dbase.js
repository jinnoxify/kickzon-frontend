// const express = require("express");
// const router = express.Router();
const firebase = require("firebase/app");

// var firebaseConfig = {

// };

// firebase.initializeApp(firebaseConfig);

// const admin = require("firebase-admin");

// module.exports(admin);

function initializeFirebase() {
  var config = {
    apiKey: "AIzaSyDH5Naso_EWDZ47lAX4H68Oj3opMK0yQAI",
    authDomain: "shoes-ecommerce-2f4bb.firebaseapp.com",
    databaseURL: "https://shoes-ecommerce-2f4bb.firebaseio.com",
    projectId: "shoes-ecommerce-2f4bb",
    storageBucket: "shoes-ecommerce-2f4bb.appspot.com",
    messagingSenderId: "936823074033",
    appId: "1:936823074033:web:2949173a5dfaf9ff3dcd50",
    measurementId: "G-JN23M5N65G",
  };
  //initialize firebase
  if (!firebase.apps.length) {
    firebase.initializeApp({});
  }
}
