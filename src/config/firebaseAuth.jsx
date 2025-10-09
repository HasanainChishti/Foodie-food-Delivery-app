import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import  {getFirestore} from "firebase/firestore"
// import { getFirestore } from "firebase/firestore";
// export const db = getFirestore(app);

const firebaseConfig = {
   apiKey: "AIzaSyAodpG3D-tNT7X-QPLWFAsb4TtxRA14-QI",
  authDomain: "foodyapp-dba23.firebaseapp.com",
  projectId: "foodyapp-dba23",
  storageBucket: "foodyapp-dba23.firebasestorage.app",
  messagingSenderId: "95566216867",
  appId: "1:95566216867:web:d1a62606ac7dd8bfb7c916"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const provider = new GoogleAuthProvider();
