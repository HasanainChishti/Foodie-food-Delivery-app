// // import { useState,useEffect } from "react";
// // const [RestData,setRestData]=useState([]);
//   // useEffect(()=>{
//           async function fetchData() {
//               // const swiggyAPI = encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3008&lng=73.2043&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//               // const proxyURL = `https://api.allorigins.win/raw?url=${swiggyAPI}`;
            
//               // try {
//                 const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3008&lng=73.2043&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//                 const data = await response.json();
//                 let RestData;
//                 console.log(data);
//                 // console.log("https://www.swiggy.com/biryani-restaurants-near-m");
//                 const res=await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=biryani&trackingId=undefined&submitAction=ENTER&queryUniqueId=9cd9c831-e88f-10da-7dec-2b749627e926");
//                 const d=await res.json();
//                 // console.log(d);
                
//                 const onm=await fetchData("")
//                 RestData=data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//                 // setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//               // } catch (error) {
//                 // console.log("Error fetching data:", error);
//               // }
           
//           return RestData;
//       }
//      let RestData= fetchData();
//       //https://cors-anywhere.herokuapp.com/
//   // },[]);

//   export default RestData;
