import firebase from 'firebase'
import {pass, sender, appId} from './utils/pass';

const firebaseConfig = {
  apiKey: pass,
  authDomain: "secretosapp-de146.firebaseapp.com",
  projectId: "secretosapp-de146",
  storageBucket: "secretosapp-de146.appspot.com",
  messagingSenderId: sender,
  appId: appId
};

firebase.initializeApp(firebaseConfig)
const db=firebase.firestore();

export default db;