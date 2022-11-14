import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {seedDatabase} from '../seed';
const config={
  apiKey: "AIzaSyAffDL6EstUjBbo8Orr3jV94iGj6w6ELfg",
  authDomain: "netflix-8e69c.firebaseapp.com",
  projectId: "netflix-8e69c",
  storageBucket: "netflix-8e69c.appspot.com",
  messagingSenderId: "156112582080",
  appId: "1:156112582080:web:7e942d3a07189bcfe58425"
};

const firebaseauth=firebase.initializeApp(config);

//seedDatabase(firebaseauth);

export{firebaseauth};