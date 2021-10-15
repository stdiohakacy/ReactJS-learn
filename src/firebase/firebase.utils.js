import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBZh2FOGUtFLlE_9GZ5amMueV_2bJTYKDg",
    authDomain: "fir-login-2d5e1.firebaseapp.com",
    projectId: "fir-login-2d5e1",
    storageBucket: "fir-login-2d5e1.appspot.com",
    messagingSenderId: "528994200974",
    appId: "1:528994200974:web:afa18e29f4d634c5f208df",
    measurementId: "G-9N75SS86G3"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)