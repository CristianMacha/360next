import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtXPGdrbk7faUGzXjDVhDC5k0msXI5z88",
    authDomain: "happy-birthday-2762d.firebaseapp.com",
    projectId: "happy-birthday-2762d",
    storageBucket: "happy-birthday-2762d.appspot.com",
    messagingSenderId: "233686344518",
    appId: "1:233686344518:web:a5070fc187c9a78f2d3b47",
    measurementId: "G-6ETGQ1VQ4Q",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);