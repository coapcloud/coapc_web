import firebase from "firebase/app";
import "firebase/firestore";

import { firebaseConfig } from "@/plugins/firebase/firebase";

export const db = firebase.initializeApp(firebaseConfig).firestore();