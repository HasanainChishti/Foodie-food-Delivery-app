import { useState } from "react";
import { Link } from "react-router";
export default function  RestCard({ restInfo }) {
  // console.log("rest info",restInfo);
       let restName;
       const [toggle,setToggle]=useState(0);
  return (
    <Link to={"/city/delhi/"+restInfo.info.id} state={{restInfo}}>
      {/* transition duration-50 hover:scale-120  */}
    <div className="w-[300px] h-[350px]  transform  p-4   rounded-2xl outline-0 shadow-2xl gap-2 transition-300 card transition-transform hover:-translate-y-3">
    <img
      className="w-[350px] h-[170px] object-cover rounded-xl"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
        restInfo?.info?.cloudinaryImageId
      }>

      </img>
       <div className="w-[95%] mx-auto mt-3 overflow-hidden">
       <div className=" font-semibold text-2xl overflow-hidden text-ellipsis">{restInfo?.info?.name.length > 15? restInfo?.info?.name.slice(0,18)+"...":restInfo?.info?.name}</div>
       <div className="flex gap-2  items-center mx-auto">
       <div className="text-xl text-gray-600 font-semibold">{restInfo?.info?.avgRating}</div>
       <div className="text-xl  font-semibold">{restInfo?.info?.sla?.slaString}</div>
       
       </div>
    
      <div className=" text-gray-600 text-xl mt-1 overflow-hidden h-7 text-ellipsis">{restInfo?.info?.cuisines.length > 10? restInfo?.info?.cuisines.slice(0,18)+"...":restInfo?.info?.cuisines}</div>

       <div className="text-gray-600  text-xl overflow-hidden">{restInfo?.info?.areaName.length > 18 ?restInfo?.info?.areaName.slice(0,18)+"...": restInfo?.info?.areaName}</div>
       
       {/* <div className="text-gray-600 text-xl mt-1 overflow-hidden h-7">{restInfo?.info?.cuisines.join(" ")}</div> */}
       </div>
    </div>
    </Link>
  );
}
 