import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUSDMWGvWvq-0Adv-aRuK-K_I1cK5yTJQ",
  authDomain: "vuetify-project-management.firebaseapp.com",
  projectId: "vuetify-project-management",
  storageBucket: "vuetify-project-management.appspot.com",
  messagingSenderId: "223333043484",
  appId: "1:223333043484:web:7589f844849532318b3ed9",
  measurementId: "G-V8SPKYZFXX"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
db.settings({ timesstampsInSnapshots: true })


export default db