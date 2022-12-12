import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUe891BLnZsGbx25-D4hxNPPeP9DSyw1s",
  authDomain: "kstar-front-end.firebaseapp.com",
  projectId: "kstar-front-end",
  storageBucket: "kstar-front-end.appspot.com",
  messagingSenderId: "83340518043",
  appId: "1:83340518043:web:4770cb065152e5cbaddc3e",
  measurementId: "G-VZE0DQSNYZ"
};

const fire = initializeApp(firebaseConfig);

export default fire
