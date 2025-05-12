import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC5cqsw9g4sVBIbzJNL85dnsH6XgpW9Seg",
  authDomain: "todo-list-bade9.firebaseapp.com",
  projectId: "todo-list-bade9",
  storageBucket: "todo-list-bade9.appspot.com",
  messagingSenderId: "721863969389",
  appId: "1:721863969389:web:65e352fdef66b2e6a38d64",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth() ;
export default app
// // const analytics = getAnalytics(app);