

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// import * as firebase from "firebase";
// import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRLGEz1-rkhoSf2D2TnB8jrAyyTjueYHA",
  authDomain: "hearthstone-cards-396b8.firebaseapp.com",
  databaseURL: "https://hearthstone-cards-396b8-default-rtdb.firebaseio.com",
  projectId: "hearthstone-cards-396b8",
  storageBucket: "hearthstone-cards-396b8.appspot.com",
  messagingSenderId: "99653915196",
  appId: "1:99653915196:web:f36e326a9e4029802c6939",
  measurementId: "G-1N6ZG18Y7X"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const FireDb = ref(getDatabase());
// firebase.initializeApp(firebaseConfig);
// export default firebase.database();

const app = initializeApp(firebaseConfig);
export const db =  getDatabase(app);
