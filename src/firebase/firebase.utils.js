import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCitcfM09g_a9Ka2-gN2KAosTagFx2WWj4",
  authDomain: "projectgreen-d1619.firebaseapp.com",
  projectId: "projectgreen-d1619",
  storageBucket: "projectgreen-d1619.appspot.com",
  messagingSenderId: "412689187724",
  appId: "1:412689187724:web:c8aae7c8c6f510e635cca9",
  measurementId: "G-4H43X8G472"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;