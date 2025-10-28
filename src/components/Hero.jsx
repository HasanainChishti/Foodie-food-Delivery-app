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
    <p className="hidden md:flex text-lg md:text-3xl md:font-bold text-gray-200 mb-8">
      Discover your favorite dishes from top restaurants near you.
    </p>

    {/* Buttons */}   
    <div className="flex flex-col w-1/2  items-center mx-auto sm:flex-row sm:w-full md:w-full  md:flex-row flex-wrap justify-center gap-4">
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
  </div>
</section>
    </>
  );
};

export default Hero;
