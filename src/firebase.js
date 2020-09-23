  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQl1QOpPLszu0lBK5Wj-ewXNqpmCwe254",
    authDomain: "instagram-clone-ec619.firebaseapp.com",
    databaseURL: "https://instagram-clone-ec619.firebaseio.com",
    projectId: "instagram-clone-ec619",
    storageBucket: "instagram-clone-ec619.appspot.com",
    messagingSenderId: "560367695306",
    appId: "1:560367695306:web:5383934e2ea3b2108a8b33",
    measurementId: "G-M1PGR9KLMQ"
  }); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };