import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAILYyLmGCgUSx2eVMPDNMXXyzACs_pFcA',
  authDomain: 'tmdb-filmoteka.firebaseapp.com',
  projectId: 'tmdb-filmoteka',
  storageBucket: 'tmdb-filmoteka.appspot.com',
  messagingSenderId: '27056915282',
  appId: '1:27056915282:web:1aa074ec50eaa0ff67708b',
};

export const app = initializeApp(firebaseConfig);
