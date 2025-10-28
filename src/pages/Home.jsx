
import { useEffect, useState } from "react";

import Shimer from "../components/Shimer";
import SearchBar from "../components/SearchBar";
import OwnYourMind from "../components/OwnYourMind";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Hero from "../components/Hero"
import { jsxs } from "react/jsx-runtime";
// import assets from "../assets/profile_icon.png"
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchDish from "../components/SearchDish";
import Contact from "../components/Contact";
import WhyUs from "../components/WhyUs";
import { useRef } from "react";
export default function Home({ RestData, onMindData }) {
  const [search, setSearch] = useState("");
  const [enter, setEnter] = useState(false);
  const [theme,setTheme]=useState('light');

  const [searchDish,setSearchDish]=useState((onMindData?(onMindData[0]?.action?.text):null)||'Biryani')
  const logo=['F','o','o','d','i','e'];
   function handleSearchDish(name)
   {
    console.log('at handle',name);
    
       setSearchDish(name);
   }

   useEffect(()=>{
    if(onMindData)
       setSearchDish(onMindData[0]?.action?.text)
   },[onMindData])
  //  const [dish, setDish] = useState([]);
  const cartItems = useSelector((state) => state.cartSlice.items);
  const userData = useSelector((state) => state.authSlice.userData);

  console.log(searchDish,"dish name");
  
   function setLoc(value)
   {
           setSearch(value)
           localStorage.setItem('location',JSON.stringify(value));

   }
  const menuRef = useRef(null);
 
  //  const TopDishRef = useRef(null);
     const scrollToMenu = () => {
       menuRef.current?.scrollIntoView({ behavior: "smooth" });
     };
  
  if (RestData?.length === 0) {
    return <Shimer />;
  }
  // console.log("rest Data is",RestData);
  

  return (
    <div  
    className={`w-full min-h-screen bg-white  `}>
      

       {/* <Header></Header> */}
      {/* Own Your Mind Section */}
      <Hero scrollToMenu={scrollToMenu}></Hero>
      {onMindData && (
        <div  id="dish-section" className="mt-10  " ref={menuRef}  >
          
          <OwnYourMind onMindData={onMindData} handleSearchDish={handleSearchDish} />
            
         
        </div>

      )}
     {/* <SearchDish searchDish={searchDish}></SearchDish> */}
      {/* Restaurant List */}
      {/* <div id="rest-section"  className="mt-16 px-4 lg:px-20 flex flex-col items-center">
        <h1  className="font-extrabold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-500 drop-shadow-lg">
          🍽️ Top Restaurants Near You
        </h1>

       
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

      
        <div className=" grid grid-cols-4 gap-6 mt-10 w-[95%]">
          {RestData?.map((restInfo) => (
            <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
          ))}
        </div>
      </div> */}
     <WhyUs></WhyUs>
      <Contact></Contact>
    <Footer></Footer>
    </div>

  );
}