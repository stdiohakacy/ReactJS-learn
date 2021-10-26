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

export const createUserProfileDocument = async (userAuth, additionalData) => { // User instance
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); // DocumentReference
    const snapShot = await userRef.get() //DocumentSnapshot

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
            console.log(`Error creating user`, error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)