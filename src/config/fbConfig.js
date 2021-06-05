import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyDsRb7MuBJl2ZH3HPaDcUXM3h-Pj0UC1zo",
    authDomain: "media-board-8b5e4.firebaseapp.com",
    projectId: "media-board-8b5e4",
    storageBucket: "media-board-8b5e4.appspot.com",
    messagingSenderId: "177415176042",
    appId: "1:177415176042:web:57d6421da2db526cd9af13",
    measurementId: "G-78716HM4DJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;