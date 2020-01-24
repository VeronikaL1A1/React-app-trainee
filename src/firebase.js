 import * as firebase from "firebase";
 import "firebase/storage"
 
 const firebaseConfig = {
    apiKey: "AIzaSyAzwz744HqcRdTmgxYvYJ2G3JoKwEx7B7g",
    authDomain: "anime-page-6d6f8.firebaseapp.com",
    databaseURL: "https://anime-page-6d6f8.firebaseio.com",
    projectId: "anime-page-6d6f8",
    storageBucket: "anime-page-6d6f8.appspot.com",
    messagingSenderId: "275843722531",
    appId: "1:275843722531:web:ead7dc8a505e5ba878f096"
  };

  firebase.initializeApp(firebaseConfig);
  let mystorage = firebase.storage();

  export {firebase, mystorage as default};


