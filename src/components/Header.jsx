import React from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { TfiSearch } from "react-icons/tfi";
import { BsCart4 } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
      const logo = ["F", "o", "o", "d", "i", "e"];
        const [ProfileDetail, setProfileDetail] = useState(0);
       const [search, setSearch] = useState("");
         const userData = useSelector((state) => state.authSlice.userData);
           const [select, setSelect] = useState(0);
            const cnt = useSelector((state) => state.cartSlice.items);
            // console.log(cnt,"is here");
            
  return (
   <>
     <nav className="w-full bg-orange-600 sm:w-full md:w-full  lg:w-full  py-8  sticky top-0 shadow-md z-50 ">
        
        <div className="w-full px-4 sm:px-4 md:px-8">
          <div className=" flex justify-between items-center  lg:flex lg:justify-evenly">
            <div className="flex items-center  p-2 rounded-xl">
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
                  <TfiSearch className="text-xl" /> Search
                </p>
              </Link>
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
                    className="text-white text-2xl font-bold"
                    onClick={() => setProfileDetail(!ProfileDetail)}
                  >
                    <img
                      src={""}
                      alt="profile"
                      className="object-cover h-[50px] w-[50px] rounded-full"
                    />
                  </button>
                  {ProfileDetail && detail()}
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
          <div className="mobile sm:hidden flex mx-auto flex-col bg-orange-500 text-white font-bold py-4 px-6 gap-4">
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
              <div className="flex items-center gap-2">
                <img
                  src={assets}
                  alt="profile"
                  className="object-cover h-[40px] w-[40px] rounded-full"
                />
                <span>Profile</span>
              </div>
            )}
          </div>
        ) : null}
      </nav>
    
   </>
  )
}

export default Header
