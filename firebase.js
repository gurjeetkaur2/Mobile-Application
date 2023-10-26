// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1eQYki1NRPD38Vz4xqkbxsuNMawIVqAU",
  authDomain: "fireauth-e124e.firebaseapp.com",
  projectId: "fireauth-e124e",
  storageBucket: "fireauth-e124e.appspot.com",
  messagingSenderId: "239512466531",
  appId: "1:239512466531:web:dbc66d73d3f4c988e37456"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}


const auth = firebase.auth()

export { auth }



// const app = initializeApp(firebaseConfig);