import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import { firebaseConfig } from "@/plugins/firebase/firebase";

export const db = firebase.initializeApp(firebaseConfig).firestore();
export const storage = firebase.storage();

firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: true })
  .catch(function(err) {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
