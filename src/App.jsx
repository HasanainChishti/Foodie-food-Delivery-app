import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Restaurant from "./pages/Home";
import RestaurantMenu from "./components/RestaurantsMenu";
import RestItemSearch from "./components/RestItemSearch";
import SearchDish from "./components/SearchDish";
import SecondHome from "./pages/SecondHome";
import store from "./Stored/Store";
import Hero from "./components/Hero";
import { Provider } from "react-redux";
import CartPage from "./pages/CartPage";
import LogIn from "./components/LogIn"
import { latContext } from "./components/ContextApi";
import { lngContext } from "./components/ContextApi";
import { TfiSearch } from "react-icons/tfi";
const App = () => {
  const [RestData, setRestData] = useState([]);
  const [onMindData, setOwnMindData] = useState([]);
  const [lat, setLat] = useState(28.7040592);
  const [lng, setLng] = useState(77.10249019999999);
  // // const [status, setStatus] = useState(0);
  // const [cartData, setCartData] = useState([]);

  // console.log("lat is", lat);
  // console.log("lng is", lng);
  // function get_data_fr/om_local_storage() {
  //   let data = JSON.parse(localStorage.getItem("cartData")) || [];
  //   setCartData(data);
  // }
  // useEffect(() => {
  //   get_data_from_local_storage();
  // }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        //  setStatus("...loading");
        const res = await fetch(
          `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        const data = await res.json();
        console.log("all data", data);
        setOwnMindData(
          data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        );
        if ("gridElements" in data?.data?.cards[1]?.card?.card)
          console.log("cur ", data?.data?.cards[1]?.card?.card);
        else console.log("no");
        if ("gridElements" in data?.data?.cards[1]?.card?.card) {
          // console.log(gridElements);

          setRestData(
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
        } else
          setRestData(
            data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );

        // setStatus("SUCCESS");
        // console.log(status);

        // setRestData()
      } catch (error) {
        //  setStatus("ERROR");
      }
    }
    fetchData();

  }, [lat, lng]);


  return (
    <>
      <Provider store={store}>
        {/* <Provider store={store}> */}

        <lngContext.Provider value={{ lng, setLng }}>
          <latContext.Provider value={{ lat, setLat }}>
            <Routes>
             
              {/* <Route path="/" element={ <Home RestData={RestData} onMindData={onMindData}></Home> }></Route> */}
           
              {/* <Route path="/Grocery/:name" element={<GroceryPage></GroceryPage>}></Route> */}
            
             <Route element={<SecondHome />}>
               <Route  path="/" element={ <Restaurant RestData={RestData} onMindData={onMindData}></Restaurant>} ></Route>
            
              {/* <Route element={<SecondHome />}> */}
                <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>} ></Route>
              
                <Route path="/city/delhi/search" element={<RestItemSearch></RestItemSearch>} ></Route>
              
                <Route  path="/Search/:name" element={<SearchDish></SearchDish>}></Route>
              {/* </Route> */}
             
              <Route path="/CartPage" element={<CartPage></CartPage>}></Route>
              <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
              </Route>
            </Routes>
          </latContext.Provider>
        </lngContext.Provider>
      </Provider>
    </>
  );
};

export default App;

