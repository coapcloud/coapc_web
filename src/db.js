import firebase from "firebase";
import { firebaseConfig } from "@/firebase";

export const db = firebase.initializeApp(firebaseConfig).firestore();