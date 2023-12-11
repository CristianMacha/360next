import serviceAccount from "./accountKey.json";
import admin from "firebase-admin";

if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

export const firestore = admin.firestore();