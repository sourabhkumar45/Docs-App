import firebase from "firebase/app";
import "firebase/firestore"; // important to initialize apps

const firebaseConfig = {
  apiKey: "AIzaSyDV69El-fa5Qus8wuNhpk8qM2ckShDVwQc",
  authDomain: "docinator-d687b.firebaseapp.com",
  projectId: "docinator-d687b",
  storageBucket: "docinator-d687b.appspot.com",
  messagingSenderId: "1018635646042",
  appId: "1:1018635646042:web:fb0a5b5860c2bc701c5463",
};
const app = firebase.apps[0] ?? firebase.initializeApp(firebaseConfig);

const firestore = app.firestore();
export { firestore };
// SSR sometimes fails to initialize firebase correctly.
// We can't use the firebase.initializeApp(),firebase.auth(), firebase.database(), etc with SSR.
