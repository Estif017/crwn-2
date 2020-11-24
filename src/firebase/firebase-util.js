import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyApDYL4jK6Tp7rHHS3NnXm1ded9Z2rEP7g",
    authDomain: "crwn-2-16977.firebaseapp.com",
    databaseURL: "https://crwn-2-16977.firebaseio.com",
    projectId: "crwn-2-16977",
    storageBucket: "crwn-2-16977.appspot.com",
    messagingSenderId: "1063901345099",
    appId: "1:1063901345099:web:780b46b04f261de5d2e4ce",
    measurementId: "G-WFMECZY04C"
  };

  export const createUserProfileDocument= async(userAuth,aditionalData)=>{
    if(!userAuth) return

    const userRef= firestore.doc(`users/${userAuth.uid}`)
    const snapShot= await userRef.get()

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...aditionalData
        })
      } catch (error) {
       console.log('error occur creating user', error.message); 
      }
    }
    return userRef
  }

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  //sign in with google
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt:'select_account' })
  export const SignInWithGoogle=()=>auth.signInWithPopup(provider)


  export default firebase