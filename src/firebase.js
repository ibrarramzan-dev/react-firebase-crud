import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyClYbn4XoqAnlZGNHzafuuqQqGHQm6ApOU",
  authDomain: "fir-crud-50dc4.firebaseapp.com",
  projectId: "fir-crud-50dc4",
  storageBucket: "fir-crud-50dc4.appspot.com",
  messagingSenderId: "748829526849",
  appId: "1:748829526849:web:73dc4bd9c855f6ae792fc0",
  measurementId: "G-4LY1LG86YS",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
