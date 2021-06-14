import firebase from "firebase/app"
import "firebase"
import "firebase/auth"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAw9wVG8TRNPYi0inYpQZDsVpVkLY_HZq8",
    authDomain: "mercenary-1a5d4.firebaseapp.com",
    databaseURL: "https://mercenary-1a5d4-default-rtdb.firebaseio.com",
    projectId: "mercenary-1a5d4",
    storageBucket: "mercenary-1a5d4.appspot.com",
    messagingSenderId: "1095329701583",
    appId: "1:1095329701583:web:96c3af3c036311e3cbe1ba",
    measurementId: "G-NR90QY8C7E"
  };

const app=firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
