import React from "react";
import SearchBar from "./SearchBar";
const Hero = () => {
  return (
    <section className="relative bg-orange-100 max-w-[85%] mx-auto mt-10 rounded-xl">
      <div className=" hidden relative z-10 max-w-7xl mx-auto px-6 py-24 md:flex  md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
            Delicious Food, Delivered Fast
          </h1>
          <p className="text-orange-800 mb-8 text-2xl ">
            {`Explore hundreds of restaurants and get`} <br />
            {` your favorite meals delivered at your doorstep.`} <br />
          </p>
          <div className="flex md:hidden">
            <SearchBar></SearchBar>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={() => {
                const dish = document.getElementById("dish-section");
                dish.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition"
            >
              Order Now top dish
            </button>
            <button
              onClick={() => {
                const rest = document.getElementById("rest-section");
                rest.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Top Restuarants
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Food Delivery"
            className="rounded-xl shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full relative md:hidden mt-5  h-100 bg-orange-200 items-center justify-center align-middle">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Food Delivery"
          className="rounded-xl shadow-xl w-full h-70"
        />

        <div className="flex flex-col gap-2 justify-center  align-middle items-center mt-2 ">
          <h2 className="  text-2xl text-orange-600 text-center">
           
            Delicious Food, Delivered Fast
          </h2>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
