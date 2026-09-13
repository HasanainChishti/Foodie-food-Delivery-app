import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { BsCart4 } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartDrawer from "../pages/CartDrawer";

const Header = ({ scrollToContact,setIsCartOpen }) => {
  const logo = ["F", "o", "o", "d", "i", "e"];
  const [ProfileDetail, setProfileDetail] = useState(0);
  const [search, setSearch] = useState("");
  // const userData = useSelector((state) => state.authSlice.userData);
  const [select, setSelect] = useState(0);
  const [prof, setProf] = useState(0);
  const totalItems = useSelector((state) => state.cart.items);
  let cnt = 0;
  for (let i = 0; i < totalItems.length; i++) cnt += totalItems[i].quantity;
  // console.log(cnt, "is here");
  // console.log(userData, "udata");

  return (
    <>
      {/* <nav className="w-full h-20 flex items-center bg-[#111111] backdrop-blur-md
border-b border-white/10 sticky top-0 shadow-md z-50 "> */}
      <nav className="fixed  h-18 flex items-center top-0 z-50 w-full border-b border-[#262626] bg-[#111111]">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-4 md:px-8  ">
          <div className=" flex  items-center justify-between sm:flex sm:justify-around md:flex md:justify-between   lg:flex lg:justify-between lg:px-10">
            <div className="flex  items-center  p-2   rounded-xl ">
              {/* {logo.map((char, i) => (
                <span
                  key={i}
                  className="shadow-sm text-white text-5xl font-bold hover:bg-black transition-colors duration-300"
                >
                  {char}
                </span>
              ))} */}
              {/* <h1 className="text-2xl font-bold tracking-wide text-white">
  Restaurant */}
              {/* </h1> */}
              <h1 className="text-3xl font-bold  bg-gradient-to-r from-orange-400 via-white to-orange-400 bg-clip-text text-transparent tracking-[0.25rem]">Zayka</h1>
            </div>

            {/* SearchBar (hide on very small screens) */}
            {/* <div className="hidden lg:flex lg:w-[50%]  justify-center">
              <SearchBar />
            </div> */}

            {/* Desktop Buttons */}
            {/* <div className="hidden sm:flex items-center sm:gap-2 md:gap-4 lg:gap-4 lg:justify-between text-white   font-bold"> */}
            <div className="flex gap-10 text-slate-800">
              <Link to={`/`} className="text-sm font-medium text-[#A3A3A3] transition-colors duration-300 hover:text-white">
                {/* <p className="text-md flex gap-1 hover:text-black transition">
                  Home
                </p> */}
                {/* text-neutral-400  */}
                {/* <a className="text-sm font-medium text-[#A3A3A3] transition-colors duration-300 hover:text-white"> */}
                  Home
                
              </Link>

              <Link to={`/Search/${search || "Biryani"}`} className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">
                {/* <p className="text-md font-semibold   flex items-center gap-1 hover:text-black transition">
                  <TfiSearch className="text-xl" />
                 Dishesh
                </p> */}
                Dishes
              </Link>
              {/* <button onClick={()=>{const section=document.getElementById('contact-section')
                  section?.scrollIntoView({ behavior: "smooth" })}
            } className="text-md font-semibold flex items-center gap-1 hover:text-black transition">
                  Contact
                </button> */}
                <Link className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">
                 Contact
                </Link>
            
              {/* <button className='text-white text-md font-semibold '>
                  Faq
                </button> */}
                <Link className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">
                 Faq
                </Link>
            
            </div>
            {/* https://cors-by-codethread-for-swiggy.vercel.app/cors/ */}
            <div className="flex gap-3 items-center">
              {/* <Link > */}
                <button className="flex relative items-center gap-1 text-xl font-semibold
                 hover:text-black transition"
                onClick={()=>setIsCartOpen(true)}

                 >
                  <BsCart4 className="text-xl text-white hover:text-[#F59E0B]" />
                  {cnt != 0 ? (
                    <span className="absolute bottom-4 left-3  px-1 text-xs text-green-600  bg-white rounded-full">
                      {cnt}
                    </span>
                  ) : null}
                </button>
              {/* </Link> */}

              {/* {!userData ? (
                <Link to="/LogIn">
                
                  <button
                    // className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:bg-amber-400"
                    className="rounded-full bg-[#F59E0B] px-4 py-2 font-semibold text-[#111111] transition-all duration-300 hover:bg-[#fbbf24] hover:scale-[1.03]"
                  >
                    Order Now
                  </button>
                </Link>
              ) : */}
               (
                <div className="relative">
                  <button
                    className="flex justify-center align-middle items-center text-white text-2xl font-bold "
                    onClick={() => setProf((prof) => !prof)}
                  >
                    <CgProfile></CgProfile>
                    {prof ? (
                      <ul className="absolute top-10 outline-green-200 shadow-md rounded-xl p-2 bg-gray-100 text-black text-lg font-semibold">
                        <Link to={`/Profile`}>
                          <li>Orders</li>
                        </Link>
                        <li>LogOut</li>
                      </ul>
                    ) : null}
                  </button>
                  {/* {ProfileDetail && detail()} */}
                </div>
              )
              {/* } */}

            </div>
            {/* </div> */}
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
            <Link to={`/`} onClick={() => setSelect(false)}>
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
            <p
              className="text-lg "
              onClick={() => {
                const section = document.getElementById("contact-section");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </p>

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
                  onClick={() => setProf((prof) => !prof)}
                >
                  <CgProfile></CgProfile>
                  {prof ? (
                    <ul className="absolute top-10 outline-green-200 shadow-md rounded-xl p-2 bg-gray-100 text-black text-xl font-semibold">
                      <Link to={`/Profile`}>
                        <li>Orders</li>
                      </Link>
                      <li>LogOut</li>
                    </ul>
                  ) : null}
                </button>
                {/* {ProfileDetail && detail()} */}
              </div>
            )}
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Header;
