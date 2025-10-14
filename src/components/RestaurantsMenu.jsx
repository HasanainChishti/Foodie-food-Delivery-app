import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import MenuCard from "./MenuCard";
import { useContext } from "react";
import { latContext } from "./ContextApi";
import { lngContext } from "./ContextApi";

export default function RestaurantMenu() {
  let {id}= useParams();
  // console.log(""Restid);
  
  let location=useLocation();
   let {restInfo}=location.state||{};
  console.log("usePdata",restInfo);
  // console.log("restid",Restid);
  
  // // const [selected, setSelected] = useState(null);
   let {lat}=useContext(latContext);
    let {lng}=useContext(lngContext);
  // let Restid=restInfo.info.id;
  console.log(lat,lng);
  
 
  const [RestData, setRestData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
  async function fetchData() {
    
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
      // https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER
      const response = await fetch(swiggyAPI);
      const data = await response.json();

      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      console.log(tempData);

      const filterData = tempData.filter(
        (items) => "title" in items?.card?.card
      );
      setRestData(filterData);
    }
    fetchData();
  }, []);

  console.log("ApnaRestData",RestData);
  // localStorage.setItem('restId',JSON.parse(RestData.id))

  return (

    <>  

             {/* <div className="w-[60%] mx-auto mt-20 bg-gray-100 shadow-md rounded-xl p-2" > */}
               
          <div className="w-[60%] bg-orange-100  mt-20 h-100 sm:h-90 md:h-80 mx-auto flex shadow-md gap-1   rounded-xl  p-5">
              
             <div className=" w-[60%]  flex flex-col gap-5 ">
            <h1 className="mt-5 text-4xl text-orange-600 font-bold  text-start">{restInfo.info.name}</h1>
              <div className="flex gap-10 text-2xl font-bold">
                   <span>{restInfo.info.avgRating}(<span>{restInfo.info.totalRatingsString}</span>)</span>
                   <span>{restInfo.info.costForTwo}</span>
                   </div>
                   <div className="text-xl font-bold flex flex-col gap-5">
                        <p className="text-gray-500"><span className="text-black">Location</span>         {restInfo.info.areaName}</p>
                        <p>{restInfo.info.sla.slaString}</p>
                   </div>
             </div>
             <div className="w-[40%]   ">
          <img  className="object-cover h-50 rounded-xl shadow-xl w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId
}></img>
             </div>
          </div>
             {/* </div> */}
               {/* search */}
          {/* <div className="w-[60%] mt-20 mx-auto flex flex-col  gap-5">
           
            <Link to={`/city/delhi/Search`}>
           <input type="text" placeholder={`Search For Dishes in ${restInfo.info.name}`}
            className="border-1 w-full py-2   text-center font-bold
             text-2xl rounded-2xl"></input>
            </Link>
          </div> */}
          
      <div className="w-[60%] mt-10  mx-auto">
        <button
          className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${
            selected === "veg" ? "bg-green-600" : "bg-gray-300"
          }`}
          onClick={() => setSelected("veg")}
        >
          veg
        </button>
        <button
          className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${
            selected === "nonVeg" ? "bg-red-600" : "bg-gray-300"
          }`}
          onClick={() => setSelected("nonVeg")}
        >
          Non-veg
        </button>
      </div>
      <div className="w-[60%] mx-auto mt-10 border-b-1 items-start shadow-xl bg-gray-100" >
        {RestData.map((menuItems) => (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
            foodSelected={selected}
            // Restid={Restid}
            restInfo={restInfo}
          ></MenuCard>
        ))}
      </div>
      <div className="w-[60%] h-120 bg-gray-200 mx-auto mt-5 p-10 flex flex-col gap-5 mb-5 rounded-xl">
          <div className="mt-1 flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-gray-900">{restInfo?.info?.name}</h3>
            <h4 className="text-xl font-semibold text-gray-900">({restInfo?.info?.locality})</h4>
          </div>
          <p className="text-xl font-semibold">{restInfo?.info?.areaName}</p>
          <hr></hr>
          <div className="mx-auto">
              <h1 className="text-2xl font-semibold text-gray-900">For Better Exprience Download <strong>Foodie</strong> App Now</h1>
          </div>
      </div>

    </>
  );

}