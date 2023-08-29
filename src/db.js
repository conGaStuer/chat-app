import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAftD1tpzwJJ9yMpN-7RgIfwWwb5cGj358",
  authDomain: "chat-f25d8.firebaseapp.com",
  databaseURL: "https://chat-f25d8-default-rtdb.firebaseio.com",
  projectId: "chat-f25d8",
  storageBucket: "chat-f25d8.appspot.com",
  messagingSenderId: "179030187976",
  appId: "1:179030187976:web:0f2e76829ad9523f536afd",
};

const db = firebase.initializeApp(firebaseConfig);
export default db;
