import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyDi6C-lFoXF14dBjw3TKNSMNMRXFokDZuQ",
    authDomain: "disney-plus--clone.firebaseapp.com",
    projectId: "disney-plus--clone",
    storageBucket: "disney-plus--clone.appspot.com",
    messagingSenderId: "769103990483",
    appId: "1:769103990483:web:04f30b674c76761e3b0e26"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

