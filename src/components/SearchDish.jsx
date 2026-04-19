import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import SearchDishInfo from "./SearchDishInfo";
import { latContext, lngContext } from "./ContextApi";
import veg from "../iconImages/veg.png";
import nonVeg from "../iconImages/nonVeg.png";
import Footer from "./Footer";
import Shimer from "./Shimer";
const SearchDish = () => {
  let { name } = useParams();
  console.log(name,"dish");
  
  const [dish, setDish] = useState([]);
  const [filterData, setFilterData] = useState([]);
  // console.log("dish name in search page", searchDish);

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [cnt, setCnt] = useState(0);
  const { lat } = useContext(latContext);
  const { lng } = useContext(lngContext);
  console.log("this is input", input);
  console.log("lat & lng ", lat, lng);
  // console.log('lat',lat, 'lng',lng);

  useEffect(() => {
    if(name==="Pure Veg")
      name="veg";
    setInput(name);
  }, [name]); // console.log(name,"name");
 const [active,setActive] = useState('')
  //to many re renders error
  //  if(name!=undefined)
  //   setInput(name)
  // name=search;
  // console.log("item is", name);

  async function fetchDish(itemName) {
    console.log("fetch ", lat, lng);

    const res = await fetch(
      `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${itemName}&trackingId=48761fc8-9fe0-4d35-684d-41bb95bb5d83&submitAction=ENTER&queryUniqueId=e96aad3b-033c-b898-bf98-b715cc8223d0`
    );
    const data = await res.json();
    // console.log("data",data);

    const dishData =
      data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
    // const RestdishData=data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
    // console.log("dishdata", dishData);
    // console.log("dishdata", RestdishData);

    const fData = dishData?.filter((card) => card?.card?.card.info);
       
    setDish(fData);
    setFilterData(fData);
     setFilterData(fData.slice(0,32));
    console.log(filterData,"current ");
    
    // console.log("all dish", dish);
  }
  function getFilterData(filter) {
    console.log("filter", dish);
    // let filterData;
    if (filter === "veg") {
      console.log("veg yes");
      setFilterData(filterData.filter((item) => item?.card?.card?.info?.isVeg));
    } else if (filter === "non-veg") {
      console.log("nonveg yes");
      setFilterData(filterData.filter((item) => !item?.card?.card?.info?.isVeg));
    } else if (filter === "₹300 - ₹800") {
      // (item?.card?.card?.info?.price/100)<=100)
      // console.log("300- 600 yes");
      setFilterData(
        filterData.filter(
          (item) =>
            item?.card?.card?.info?.price/100 >300 &&
            item?.card?.card?.info?.price/100 <= 800
        )
      );
    } else if (filter === "Less than ₹300") {
      // console.log("less than -300 yes", item?.card?.card?.info?.price / 100);

       setFilterData(
        filterData.filter(
          (item) =>  item?.card?.card?.info?.price/100 <= 300))
    }
     else if(filter==="Ratings")
     {
     const sorted=[...filterData].sort((a,b)=>b.card?.card?.info?.ratings?.aggregatedRating.rating-a.card?.card?.info?.ratings?.aggregatedRating.rating);
    setFilterData(sorted)
    //  console.log(filterData,"sort data");
     
     } 
     else if(filter==="low to high")
     {
      const sorted=[...filterData].sort((a,b)=>a.card?.card?.info?.price-b.card?.card?.info?.price);
    setFilterData(sorted)
     }
        setFilterData(sorted.slice(0,40));
 
  }

  useEffect(() => {
    console.log("effect func",input);
//
    fetchDish(input);
  }, [lat, lng,input]);
  console.log("dish data", dish,input);

  function getDish(search) {
    // if(search)
    // yaha pe jo bhi sidh he usme dish word add karna pdega agar nahi he to tabhi data aayega
    console.log('yes called',search);
    
    fetchDish(search);
  }
  if(filterData?.length === 0)
    return  <Shimer />;
  // ⭐💰🥗
  return (
    <div className="bg-gray-50">
     {
      //   filterData?  <div className=" w-[80%] flex  flex-col md:flex-row md:mx-auto lg:flex-row lg:gap-2 lg:mx-auto  mt-30   ">
      //   <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row gap-2 w-[100%] mb-10">
      //     {[`veg`, `non-veg`, "Ratings", "low to high", "Less than ₹300"].map(
      //       (filter, i) => (
      //         <button
      //           key={i}
      //           // from-orange-500 to-orange-300
      //           onClick={() => getFilterData(filter)}
      //           className=" w-auto py-2 px-4 rounded-full font-semibold text-lg shadow-md bg-gradient-to-r from-orange-200 to-orange-400  text-black hover:scale-105 hover:shadow-xl transition"
      //         >
      //           {filter == "veg" ? (
      //             <div className="flex">
      //                <img src={veg} className="w-7 h-7 "></img>
      //                 veg
                   
                   
      //             </div>
      //           ) : filter == "non-veg" ? (
      //             <div className="flex">
                    
      //                 <img src={nonVeg} className="w-7 h-7 "></img>
      //                 nonVeg
      //             </div>
      //           ) : (
      //             <div>
      //               {/* <span className="w-2 h-2 bg-green-600"></span> */}
      //               {/* <span>{filter}</span> */}
      //               {filter}
      //             </div>
      //           )}
      //         </button>
      //       )
      //     )}
      //   </div>
      //   <div className="search relative flex w-[270px] sm:w-[290px] md:w-[320px] lg:w-[360px] h-[60px] ">
      //     <input
      //       type="text"
      //       placeholder="Search Dish..."
      //       className=" flex  shadow-2xl border-2 w-[250px] sm:w-[250px] md:w-[300px] h-[50px]   text-black text-xl  rounded-xl "
      //       onChange={(e) => setSearch(e.target.value)}
      //       value={search}
      //     />
      //     <button
      //       onClick={() => setInput(search)}
      //       className="sm:absolute  sm:right-0 place-items-center bg-none text-orange-400 shadow-md rounded-xl h-[46px] text-3xl w-[50px]"
      //     >
      //       +
      //     </button>
      //   </div>
      // </div>:""
      <div className=" w-[80%] mx-auto flex flex-col justify-center align-middle   p-4 sticky top-0 z-50 ">
  
  {/* Search */}
  <div className="mb-3">
    <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2">
      🔍
      <input
        type="text"
        placeholder="Search food..."
        className="w-full ml-2 outline-none"
      />
    </div>
  </div>

  {/* Filters */}
  <div className="flex gap-3 overflow-x-auto">
    {[`veg`, `non-veg`, "Ratings", "low to high", "Less than ₹300"].map((item) => (
      <button
        key={item}
        onClick={()=>setActive(item)}
        className={`px-4 py-1 rounded-full text-sm whitespace-nowrap 
          ${
          active === item
            ? "bg-orange-500 text-white"
            : "bg-gray-200"
        }
        `}
      >
        {item}
      </button>
    ))}
  </div>
</div>
}
    {/* {
     filterData?  <div className="btn mt-0 pt-0 w-[80%]  flex justify-start mx-auto "><button className="shadow-md bg-green-400 px-2 p-2 rounded-full" 
     onClick={()=>setFilterData(dish)}>ClearFilter</button></div>:""
    } */}
      <div
        className="w-[80%]  gap-0 mx-auto flex flex-row   md:flex-row  md:justify-between items-center align-middle 
      text-3xl font-bold "
      >
        {/* <h3 className="">Top dishesh near you</h3> */}
      </div>
         {/* { */}
    {/* //  filterData?      */}
      <div className="w-[75%] p-2 flex flex-col mx-auto  items-center justify-center align-middle rounded-2xl">
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 sm:gap-12 md:grid-cols-3  md:gap-20 lg:grid-cols-4 lg:gap-10 ">
          {filterData?.length
            ? filterData.map((item) => (
                <SearchDishInfo item={item}></SearchDishInfo>
              ))
            : null}
        </div>
      </div>
      {/* // :<div className="mb-50 mt-30 flex items-center justify-center text-2xl font-bold text-orange-600">
      //   <h1>Items is Unavailable</h1>
      // </div> */}

      <Footer></Footer>
    </div>
  );
};
export default SearchDish;

// import React, { useState } from "react";

// const menuItems = [
//   { id: 1, name: "Paneer Biryani", price: 250, type: "Veg", image: "https://source.unsplash.com/400x300/?paneer" },
//   { id: 2, name: "Chicken Biryani", price: 320, type: "Non-Veg", image: "https://source.unsplash.com/400x300/?chicken-biryani" },
//   { id: 3, name: "Veg Noodles", price: 180, type: "Veg", image: "https://source.unsplash.com/400x300/?noodles" },
//   { id: 4, name: "Butter Chicken", price: 350, type: "Non-Veg", image: "https://source.unsplash.com/400x300/?butter-chicken" },
//   { id: 5, name: "Dal Tadka", price: 150, type: "Veg", image: "https://source.unsplash.com/400x300/?dal" },
// ];

// const SearchDish = () => {
//   const [search, setSearch] = useState("");
//   const [vegOnly, setVegOnly] = useState(false);
//   const [priceFilter, setPriceFilter] = useState(null);
//   const [sort, setSort] = useState(null);

//   // 🔥 FILTER LOGIC
//   let filtered = menuItems.filter((item) => {
//     const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
//     const matchesVeg = vegOnly ? item.type === "Veg" : true;
//     const matchesPrice = priceFilter === "lt300" ? item.price < 300 : true;

//     return matchesSearch && matchesVeg && matchesPrice;
//   });

//   // 🔽 SORT
//   if (sort === "lowToHigh") {
//     filtered.sort((a, b) => a.price - b.price);
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* 🔥 Navbar */}
//       <div className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
//         <h1 className="text-xl font-bold text-orange-500">FoodApp</h1>
//         <div>🛒</div>
//       </div>

//       {/* 🔍 Search */}
//       <div className="p-4">
//         <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
//           🔍
//           <input
//             type="text"
//             placeholder="Search food..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full ml-2 outline-none"
//           />
//         </div>
//       </div>

//       {/* 🎯 Filters */}
//       <div className="flex flex-wrap gap-3 px-4 pb-4">

//         <button
//           onClick={() => setVegOnly(!vegOnly)}
//           className={`px-4 py-1 rounded-full text-sm ${
//             vegOnly ? "bg-green-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           🟢 Veg Only
//         </button>

//         <button
//           onClick={() => setPriceFilter("lt300")}
//           className={`px-4 py-1 rounded-full text-sm ${
//             priceFilter === "lt300" ? "bg-orange-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Under ₹300
//         </button>

//         <button
//           onClick={() => setSort("lowToHigh")}
//           className={`px-4 py-1 rounded-full text-sm ${
//             sort === "lowToHigh" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Price: Low to High
//         </button>

//         <button
//           onClick={() => {
//             setVegOnly(false);
//             setPriceFilter(null);
//             setSort(null);
//             setSearch("");
//           }}
//           className="px-4 py-1 rounded-full text-sm bg-red-100 text-red-500"
//         >
//           Clear Filters
//         </button>
//       </div>

//       {/* 🍽️ Menu Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//         {filtered.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-40 object-cover"
//             />

//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{item.name}</h3>

//               <p className="text-gray-500 text-sm mt-1">
//                 {item.type === "Veg" ? "🟢 Veg" : "🔴 Non-Veg"}
//               </p>

//               <div className="flex justify-between items-center mt-2">
//                 <span className="font-bold text-lg">₹{item.price}</span>
//                 <button className="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600">
//                   Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ❌ Empty State */}
//       {filtered.length === 0 && (
//         <div className="text-center text-gray-500 mt-10">
//           No items found 😢
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchDish;