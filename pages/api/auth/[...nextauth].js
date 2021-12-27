import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "../../../firebase.js";

const app = firebase.apps[0] ?? firebase.initializeApp(firebaseConfig);

const firestore = app.firestore();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  //can add more providers here
  adapter: FirebaseAdapter(firestore),
  secret: process.env.SECRET,

  // optional
  //database: process.env.DATABASE_URL,
});
