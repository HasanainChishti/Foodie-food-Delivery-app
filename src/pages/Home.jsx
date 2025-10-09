
import { useState } from "react";
import RestCard from "../components/RestCard";
import Shimer from "../components/Shimer";
import SearchBar from "../components/SearchBar";
import OwnYourMind from "../components/OwnYourMind";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Hero from "../components/Hero"
import { jsxs } from "react/jsx-runtime";
// import assets from "../assets/profile_icon.png"
import Header from "../components/Header";
export default function Restaurant({ RestData, onMindData }) {
  const [search, setSearch] = useState("");
  const [enter, setEnter] = useState(false);
  const [theme,setTheme]=useState('light');
  const logo=['F','o','o','d','i','e'];

  const cartItems = useSelector((state) => state.cartSlice.items);
  const userData = useSelector((state) => state.authSlice.userData);
   function setLoc(value)
   {
           setSearch(value)
           localStorage.setItem('location',JSON.stringify(value));

   }
 
  if (RestData?.length === 0) {
    return <Shimer />;
  }

  return (
    <div  
    className={`w-full min-h-screen bg-white  `}>
      

       {/* <Header></Header> */}
      {/* Own Your Mind Section */}
      <Hero></Hero>
      {onMindData && (
        <div  id="dish-section" className="mt-10 ">
          
          <OwnYourMind onMindData={onMindData} />
            
         
        </div>
      )}
    
      {/* Restaurant List */}
      <div id="rest-section"  className="mt-16 px-4 lg:px-20 flex flex-col items-center">
        <h1  className="font-extrabold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-500 drop-shadow-lg">
          🍽️ Top Restaurants Near You
        </h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-col md:flex-row gap-4 mt-8 ">
          {["⭐ Ratings", "🔥 Offers", "💰 ₹300 - ₹600", "🥗 Less than ₹300"].map(
            (filter, i) => (
              <button
                key={i}
                className="p-2 px-4 rounded-full font-semibold text-lg shadow-md bg-gradient-to-r from-orange-500 to-orange-300 text-black hover:scale-105 hover:shadow-xl transition"
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-10 w-[95%]">
          {RestData?.map((restInfo) => (
            <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
          ))}
        </div>
      </div>
      <footer className=" md:w-[90%]  mx-auto rounded-xl md:flex flex-col h-240 sm:240 sm:flex-col md:h-100 mb-10 bg-gray-200">
      <div className=" flex flex-col gap-2 md:flex-row justify-evenly p-2 mt-5 items-center">
                   <div className="flex flex-col gap-4">
                    <h1 className="text-orange-600 text-4xl font-semibold">🍴Foodie</h1>
                    <p className="text-gray-700 text-2xl font-semibold">Delicious food & groceries delivered to your doorstep.</p>
                    <p className="text-gray-700 text-2xl font-semibold">Download the App Now</p>
                    <div className="flex justify-evenly ">
                      <button className="text-gray-900 text-2xl font-semibold border-1">Play Store</button>
                      <button className="text-gray-900 text-2xl font-semibold border-1">Android Store</button>
                    </div>
                   </div>
                   <div className="flex flex-col text-xl text-gray-900 gap-2">
                     <h2 className="text-lg font-semibold mb-3">Useful Links</h2>
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>ContactUs</li>
                        <li>Cart</li>
                   </div>
                   <div className="flex flex-col text-xl text-gray-900 gap-2">
                     <h2 className="text-lg font-semibold mb-3">Popular Cities</h2>
                    <li>Mumbai</li>
                    <li>Delhi</li>
                    <li>Hedrabad</li>
                    <li>Ahmedabad</li>
                   </div>
                       <div className="flex flex-col text-xl text-gray-900 gap-2">
          <h2 className="text-lg font-semibold mb-3">Get in Touch</h2>
          <p className="text-gray-900">📧 support@foodieexpress.com</p>
          <p className="text-gray-900">📍 Mumbai, India</p>
          <div className="flex flex-col space-x-4 mt-3">
            <p>FaceBook</p>
            <p>Instagram</p>
            <p>WatsApp</p>
{/* <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
            <FaInstagram className="cursor-pointer hover:text-yellow-400" />
            <FaTwitter className="cursor-pointer hover:text-yellow-400" />
            <FaLinkedin className="cursor-pointer hover:text-yellow-400" /> */}
          </div>            
        </div>
      </div> 
          <div className="border-t border-gray-900 mt-8 pt-5 text-center text-gray-900">
        © {new Date().getFullYear()} FoodieExpress. All Rights Reserved.
      </div>
      </footer>
    </div>

  );
}