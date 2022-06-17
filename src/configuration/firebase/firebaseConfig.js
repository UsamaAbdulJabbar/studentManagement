
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBvIR2r1-w8mrgimuTZ849IZ_ie8-xK8KU",
  authDomain: "fir-app-c0eba.firebaseapp.com",
  databaseURL: "https://fir-app-c0eba-default-rtdb.firebaseio.com",
  projectId: "fir-app-c0eba",
  storageBucket: "fir-app-c0eba.appspot.com",
  messagingSenderId: "86371327107",
  appId: "1:86371327107:web:2e6972e063a7ccb5230fb6",
  measurementId: "G-VQ4BDQ8ZK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export default app;