import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA3Yshpl2b-bWIVN-LfHpdVICt0VOcz5kI",
    authDomain: "chatter-63b93.firebaseapp.com",
    projectId: "chatter-63b93",
    storageBucket: "chatter-63b93.appspot.com",
    messagingSenderId: "74409714722",
    appId: "1:74409714722:web:56c730e4bcd5113fdf567b"
  };
  
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;