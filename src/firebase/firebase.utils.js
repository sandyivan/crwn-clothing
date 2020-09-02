import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWCYXq8LyUD1ibhUiag2EhjuzLRKH7Eo8",
    authDomain: "crwn-db-15cce.firebaseapp.com",
    databaseURL: "https://crwn-db-15cce.firebaseio.com",
    projectId: "crwn-db-15cce",
    storageBucket: "crwn-db-15cce.appspot.com",
    messagingSenderId: "728909466293",
    appId: "1:728909466293:web:92fd82a515daddba71ccfc",
    measurementId: "G-6V86WXWZNJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;