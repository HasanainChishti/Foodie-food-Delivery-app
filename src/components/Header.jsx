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
     <nav className="w-full h-20 flex items-center bg-orange-600 sticky top-0 shadow-md z-50 ">
         
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-4 md:px-8  ">
          <div className=" flex  items-center justify-between sm:flex sm:justify-around md:flex md:justify-between   lg:flex lg:justify-between lg:px-10">
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
            {/* <div className="hidden lg:flex lg:w-[50%]  justify-center">
              <SearchBar />
            </div> */}

            {/* Desktop Buttons */}
            <div className="hidden sm:flex items-center sm:gap-2 md:gap-4 lg:gap-4 text-white   font-bold">
               <Link to={`/`}>
                <p className="text-2xl font-semibold flex items-center gap-1 hover:text-black transition">
                  Home
                </p>
              </Link>
              
              <Link to={`/Search/${search || "Biryani"}`}>
                <p className="text-2xl font-semibold border-1 rounded-xl p-1  py-1 flex items-center gap-1 hover:text-black transition">
                  <TfiSearch className="text-xl" />
                 Dish
                </p>
              </Link>
              <button onClick={()=>{const section=document.getElementById('contact-section')
                  section?.scrollIntoView({ behavior: "smooth" })}
            } className="text-2xl font-semibold flex items-center gap-1 hover:text-black transition">
                  Contact
                </button>
{/* https://cors-by-codethread-for-swiggy.vercel.app/cors/ */}
              <Link to="/CartPage">
                <button className="flex relative items-center gap-1 text-xl font-semibold hover:text-black transition">
                  <BsCart4 className="text-3xl " /> 
                  {cnt!=0?<span className='absolute bottom-5 left-4  px-2 text-1/2 text-green-400  bg-white rounded-full'>{cnt.length}</span>:null}
                </button>
              </Link>

              {!userData ? (
                <Link to="/LogIn">
                  <button className="flex text-xl bg-white px-1 text-orange-600 font-semibold hover:text-black transition py-1 rounded-lg">
                    {/* <MdLogin className="text-xl" /> Login */}
                    Login
                  </button>
                </Link>
              ) : (
                <div className="relative">
                  
                  <button
                    className="flex justify-center align-middle items-center text-white text-3xl font-bold "
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
              className="  relative flex sm:hidden text-3xl text-orange-900 bg-white p-2 rounded-md"
              onClick={() => setSelect(!select)}
            >
              ☰
            </button>
          </div>
        </div>
        {select ? (
          <div className=" absolute top-20 mobile w-full items-center sm:hidden flex mx-auto flex-col bg-orange-500 text-white font-bold py-4 px-6 gap-4">
             <Link to={`/`}
             onClick={() => setSelect(false)}>
             <p className="text-xl  ">Home</p>
             </Link>
            <Link
              to={`/Search/${search || "null"}`}
              onClick={() => setSelect(false)}
            >
              <p className="text-lg flex items-center gap-2">
                <TfiSearch /> Search
              </p>
            </Link>
            <p className='text-lg ' onClick={()=>{
              const section=document.getElementById('contact-section')
               section?.scrollIntoView({ behavior: "smooth" })
            }}>Contact</p>

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
