import React from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { TfiSearch } from "react-icons/tfi";
import { BsCart4 } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = ({scrollToContact}) => {
      const logo = ["F", "o", "o", "d", "i", "e"];
        const [ProfileDetail, setProfileDetail] = useState(0);
       const [search, setSearch] = useState("");
         const userData = useSelector((state) => state.authSlice.userData);
           const [select, setSelect] = useState(0);
           const [prof,setProf]=useState(0);
            const cnt = useSelector((state) => state.cartSlice.items);
            // console.log(cnt,"is here");
            console.log(userData,"udata");
            
             
  return (
   <>
     <nav className="w-full h-[100px] flex  items-center bg-orange-600 sm:w-full md:w-full  lg:w-full   sticky top-0 shadow-md z-50 ">
         
        <div className=" w-full max-w-8xl px-4 sm:px-4 md:px-8  ">
          <div className=" flex justify-evenly items-center  md:flex md:justify-evenly  lg:flex lg:justify-evenly">
            <div className="flex  items-center  p-2   rounded-xl ">
              {logo.map((char, i) => (
                <span
                  key={i}
                  className="shadow-md text-white text-5xl font-bold hover:bg-black transition-colors duration-300"
                >
                  {char}
                </span>
              ))}
            </div>

            {/* SearchBar (hide on very small screens) */}
            <div className="hidden lg:flex lg:w-[50%] justify-center">
              <SearchBar />
            </div>

            {/* Desktop Buttons */}
            <div className="hidden sm:flex items-center sm:gap-4 md:gap-7 lg:gap-10 text-white   font-bold">
               <Link to={`/`}>
                <p className="text-2xl font-semibold flex items-center gap-1 hover:text-black transition">
                  Home
                </p>
              </Link>
              
              <Link to={`/Search/${search || "Biryani"}`}>
                <p className="text-2xl font-semibold flex items-center gap-1 hover:text-black transition">
                  <TfiSearch className="text-xl" />Search
                </p>
              </Link>
              <button onClick={()=>{const section=document.getElementById('contact-section')
                  section?.scrollIntoView({ behavior: "smooth" })}
            } className="text-2xl font-semibold flex items-center gap-1 hover:text-black transition">
                  Contact
                </button>
{/* https://cors-by-codethread-for-swiggy.vercel.app/cors/ */}
              <Link to="/CartPage">
                <button className="flex items-center gap-1 text-2xl font-semibold hover:text-black transition">
                  <BsCart4 className="text-2xl" /> 
                  Cart{cnt?<span>({cnt.length})</span>:null}
                </button>
              </Link>

              {!userData ? (
                <Link to="/LogIn">
                  <button className="flex justify-center align-middle items-center gap-1 text-2xl font-semibold hover:text-black transition px-3 py-1 rounded-lg">
                    <MdLogin className="text-2xl" /> Login
                  </button>
                </Link>
              ) : (
                <div className="relative">
                  
                  <button
                    className="flex justify-center align-middle items-center text-white text-4xl font-bold "
                    onClick={() => setProf((prof)=>!prof)}
                  >
                  <CgProfile></CgProfile>
                  {

                  prof?(<ul className='absolute top-10 outline-green-200 shadow-md rounded-xl p-2 bg-gray-100 text-black text-xl font-semibold'>
                  <Link to={`/Profile`}>
                    <li>Orders</li>
                   </Link>
                    <li>LogOut</li>
                  </ul>):null
}
                  </button>
                  {/* {ProfileDetail && detail()} */}
                </div>
              )}
            </div>

            {/* Hamburger Button (mobile only) */}
            <button
              className="flex sm:hidden text-3xl text-orange-900 bg-white p-2 rounded-md"
              onClick={() => setSelect(!select)}
            >
              ☰
            </button>
          </div>
        </div>
        {select ? (
          <div className="mobile w-full sm:hidden flex mx-auto flex-col bg-orange-500 text-white font-bold py-4 px-6 gap-4">
             <Link to={`/`}
             onClick={() => setSelect(false)}>
             <p className="text-xl ">Home</p>
             </Link>
            <Link
              to={`/Search/${search || "null"}`}
              onClick={() => setSelect(false)}
            >
              <p className="text-lg flex items-center gap-2">
                <TfiSearch /> Search
              </p>
            </Link>
            <button className='text-lg ' onClick={()=>{
              const section=document.getElementById('contact-section')
               section?.scrollIntoView({ behavior: "smooth" })
            }}>Contact</button>

            <Link to="/CartPage" onClick={() => setSelect(false)}>
              <p className="text-lg flex items-center gap-2">
                <BsCart4 className="text-2xl" /> Cart
              </p>
            </Link>

            {!userData ? (
              <Link to="/LogIn" onClick={() => setSelect(false)}>
                <p className="text-lg flex items-center gap-2">
                  <MdLogin className="text-2xl" /> Login
                </p>
              </Link>
            ) : (
               <div className="relative">
                  
                  <button
                    className="flex justify-center align-middle items-center text-white text-4xl font-bold "
                    onClick={() => setProf((prof)=>!prof)}
                  >
                  <CgProfile></CgProfile>
                  {

                  prof?(<ul className='absolute top-10 outline-green-200 shadow-md rounded-xl p-2 bg-gray-100 text-black text-xl font-semibold'>
                  <Link to={`/Profile`}>
                    <li>Orders</li>
                   </Link>
                    <li>LogOut</li>
                  </ul>):null
}
                  </button>
                  {/* {ProfileDetail && detail()} */}
                </div>
            )}
          </div>
        ) : null}
      </nav>
    
   </>
  )
}

export default Header
