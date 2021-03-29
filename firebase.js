import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDXWzUrj4JmHgkqOO8W5CKKut1FH-mkdCI",
  authDomain: "whatsapp-nextjs-92e23.firebaseapp.com",
  projectId: "whatsapp-nextjs-92e23",
  storageBucket: "whatsapp-nextjs-92e23.appspot.com",
  messagingSenderId: "445102229",
  appId: "1:445102229:web:d70ce6872806745069039c"
};

// We need to make sure wheather our app is initialized or not for server side rendering.
const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
