import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyCaba7HBfhx1xBPNf_AnuEjczyKuKrcUXU",

  authDomain: "mewc-10346.firebaseapp.com",

  databaseURL: "https://mewc-10346-default-rtdb.firebaseio.com",

  projectId: "mewc-10346",

  storageBucket: "mewc-10346.appspot.com",

  messagingSenderId: "649960225966",

  appId: "1:649960225966:web:1c7c9f2ef8fdddeb02813f",

  measurementId: "G-FVLMCBTJNZ"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export {
  app,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  getDoc,
};
