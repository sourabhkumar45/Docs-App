import firebase from "./firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDV69El-fa5Qus8wuNhpk8qM2ckShDVwQc",
  authDomain: "docinator-d687b.firebaseapp.com",
  projectId: "docinator-d687b",
  storageBucket: "docinator-d687b.appspot.com",
  messagingSenderId: "1018635646042",
  appId: "1:1018635646042:web:fb0a5b5860c2bc701c5463",
};

// SSR sometimes fails to initialize firebase correctly.
// We can't use the firebase.initializeApp(),firebase.auth(), firebase.database(), etc with SSR.
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore(); // database

export { db };
