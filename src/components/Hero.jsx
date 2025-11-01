import React from "react";
import SearchBar from "./SearchBar";
import HeroImage from "../utils/Images/header_img.png";
import SearchDish from "./SearchDish";
import { useRef } from "react";
import { Link } from "react-router";
const Hero = ({scrollToMenu}) => {
     
  return (
    <>

      <section 
  className="relative w-[90%] h-[100vh]  sm:h-[500px] mt-10  flex mx-auto  justify-center items-center bg-center bg-cover"
>   
  {/* Overlay */}
  <div className="absolute inset-0 ">
  <img src={HeroImage} alt=""  className="h-full  w-[100%]"/>
  </div>

  {/* Content */}
  <div className="absolute  flex flex-col top-5 ml-5  text-start text-white  h-120 sm:justify-center sm:align-middle sm:items-center ">
    <h2 className="text-4xl  md:text-6xl font-extrabold mb-4 ">
      Delicious Food Delivered <br /> <span className="text-white">At Your Doorstep 🍽️</span>
    </h2>
    <p className="hidden md:flex text-lg md:text-3xl md:font-bold text-orange-400 mb-8 bg-white p-2 rounded-full">
      Discover your favorite dishes from top restaurants near you.
    </p>
       <div className="location flex justify-center lg:hidden">
        <SearchBar></SearchBar>
       </div>
    {/* Buttons */}   
    <div className=" hidden w-1/2 sm:flex justify-center mt-5 mx-auto sm:flex-row sm:w-full md:w-full  md:flex-row  gap-4">
      <button  onClick={scrollToMenu} className="bg-white hover:bg-amber-600 text-gray-800 font-semibold px-6 py-3 rounded-full shadow-md transition">
       🍔 View Menu
      </button>

 <button  onClick={()=>{const section = document.getElementById('topDish');
    section?.scrollIntoView({ behavior: "smooth" });
  }} className="bg-white hover:bg-amber-600 text-gray-800 font-semibold px-6 py-3 rounded-full shadow-md transition">
       ⭐ Top Dish
      </button>
      <Link to={"/search/Biryani/"}>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-full shadow-md transition">
        🔍 Search Dish
      </button>
      </Link>
    </div>
       <div className="flex justify-center mt-4  sm:hidden w-full  mx-auto gap-2 ">
      <button  onClick={scrollToMenu} className="bg-white hover:bg-amber-600 text-gray-800 font-semibold px-2 py-2 rounded-full shadow-md transition">
       🍔Menu
      </button>

 <button  onClick={()=>{const section = document.getElementById('topDish');
    section?.scrollIntoView({ behavior: "smooth" });
  }} className="bg-white hover:bg-amber-600 text-gray-800 font-semibold px-2 py-2 rounded-full shadow-md transition">
       ⭐Dish
      </button>
      <Link to={"/search/Biryani/"}>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-3 py-2 rounded-full shadow-md transition">
        🔍 Dish
      </button>
      </Link>
    </div>
  </div>
</section>
    </>
  );
};

export default Hero;
