import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCitcfM09g_a9Ka2-gN2KAosTagFx2WWj4",
  authDomain: "projectgreen-d1619.firebaseapp.com",
  projectId: "projectgreen-d1619",
  storageBucket: "projectgreen-d1619.appspot.com",
  messagingSenderId: "412689187724",
  appId: "1:412689187724:web:9ffe2ce99cbca6b035cca9",
  measurementId: "G-QS54W4VPR0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });
        } catch(error) {
            console.error('error creating user',error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;