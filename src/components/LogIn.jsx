import React, { useState } from 'react'
import { auth, provider } from '../config/firebaseAuth'
import { db } from '../config/firebaseAuth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../Stored/authSlicer';
import { useNavigate } from 'react-router';
import {setDoc,doc,getDoc} from "firebase/firestore"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSelector } from 'react-redux';
const LogIn = () => {
   
 

  const [isSignup, setIsSignup] = useState(true); // true → signup, false → login
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const userData=useSelector(state=>state.authSlice.userData);
  console.log(userData,"in cart page");
  
  async function handleSubmit(e) {
    e.preventDefault();

    if (isSignup) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
           console.log("this is id",user.uid);
           
        // Extra data Firestore me save
        console.log(db);
        

        await setDoc(doc(db, "users", user.uid), {
          name: name,
          phone: phone,
          email: user.email
        });
         console.log("Signup successful:", user);
     dispatch(addUser({
          uid:user.uid,
          name: name,
          phone: phone,
          email: user.email
        }))
       
        alert("Signup successful!");
        navigate('/CartPage')
      
      } catch (error) {
        // alert(`"Signup error:", ${error.message}`)
        console.error("Signup error:", error.code, error.message);

        // console.log("Signup error:", error);
      }
    } else {
      // LOGIN
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
   
        // Firestore se extra data fetch
             console.log(db);
        const docSnap = await getDoc(doc(db, "users", user.uid));
   
        
    if (docSnap.exists()) {
  const data = docSnap.data();
    }

           dispatch(addUser({
            uid:user.uid,
          name:name,
          phone:phone,
          email: user.email
        }))
        alert("Login successful!");
      } catch (error) {
        alert(`"login error:", ${error.message}`)
      }
    }
  }
// async function handleAuth() {
//   try {
//     let data = await createUserWithEmailAndPassword(auth, email, password);
//     console.log("User created:", data.user);
//  let Email=data.user.email;
//     dispatch(addUser(Email))
//    console.log(Email);
   
//     navigate("/CartPage");
//   } catch (error) {
//     console.error("Error creating user:", error.message);
//   }
// }
  return (
    <div className=' min-h-screen flex items-center justify-center bg-gray-100 px-4 '>
  <div className="form-container  bg-white p-8 rounded-xl shadow-lg max-w-md  w-[400px]">
      <h2 className='text-center text-2xl font-bold mb-6'>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {isSignup && (
          <>
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className='w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 ' />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className='w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300' />
          </>
        )}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required  className='w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className='w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300' />
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p onClick={() => setIsSignup(!isSignup)} style={{cursor:"pointer",color:"blue"}}>
        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </p>
    </div>
    </div>
  )
}

export default LogIn
