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



  export const createUserProfileDocument = async (userAuth, additionalData) => {
    /*if user sign out this userAuth is equal to null so lets exit from this function8*/
    if(!userAuth) return;  

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    

    /*checking if any user data exist in this snapShop, if none lets create a data in that location using the data we get from userAuth.*/
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;  
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('something is wrong', error.message)
      }
    }
    
    return userRef;
  };
  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //google auth utility 
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;