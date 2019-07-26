import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAXKUvu2nj4VQPurgh2PGOPxTZ8DId4cAY",
  authDomain: "book-hotel-696a0.firebaseapp.com",
  databaseURL: "https://book-hotel-696a0.firebaseio.com",
  projectId: "book-hotel-696a0",
  storageBucket: "book-hotel-696a0.appspot.com",
  messagingSenderId: "54027477397",
  appId: "1:54027477397:web:97bdb75d09ad7c70"
};

firebase.initializeApp(config);
export default firebase;
