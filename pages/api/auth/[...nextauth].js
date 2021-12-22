import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firebaseConfig } from "../../../firebase.js";

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  //can add more providers here
  adapter: FirebaseAdapter(db),
  secret: process.env.SECRET,

  // optinal
  //database: process.env.DATABASE_URL,
});
