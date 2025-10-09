import React from 'react'
// import { foods } from '../assets/assets'
import { useState,useEffect } from "react";
import { Link } from 'react-router';
import RestCard from './RestCard';
// import RestData from '../utils/data';
const FoodHome = ({RestData}) => {
  
  //     const [RestData,setRestData]=useState([]);
  // useEffect(()=>{
  //         async function fetchData() {
  //             // const swiggyAPI = encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3008&lng=73.2043&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //             // const proxyURL = `https://api.allorigins.win/raw?url=${swiggyAPI}`;
            
  //             // try {
  //               const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3008&lng=73.2043&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //               const data = await response.json();
  //               console.log(data);
                
  //               setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //             // } catch (error) {
  //               console.log("Error fetching data:", error);
  //             // }
           
          
  //     }
  //     fetchData();
  //     //https://cors-anywhere.herokuapp.com/
  // },[]);
  // const foods=RestData.
  // console.log(RestData);
  // console.log(RestData);
  // console.log("own ",onMindData);
  
    // console.log(typeof RestData);
    const foods=RestData?.slice(0,5);
    // console.log(foods);
    
  return (

  
 <div className=" w-[80%] flex flex-col container  mx-auto  mb-20 mt-20 ">
 
  <h1 className='m-5 text-3xl font-bold'>Best Restaurants</h1>
  <div className='flex flex-wrap overflow-hidden   md:flex-nowrap overflow-x-scroll  gap-15'>
         {
            foods?.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
         }
         </div>
    </div>
  

  )
}

export default FoodHome
