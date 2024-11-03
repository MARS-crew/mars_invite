// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC_EpczWIqfPuPI3NEkZCZXSDbwpxO8Hu4',
  authDomain: 'recruiting-site-7dd38.firebaseapp.com',
  projectId: 'recruiting-site-7dd38',
  storageBucket: 'recruiting-site-7dd38.appspot.com',
  messagingSenderId: '131998017853',
  appId: '1:131998017853:web:dc5a5a95d5075147f9bd54',
  measurementId: 'G-SLCJEG0272',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
