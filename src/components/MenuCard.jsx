import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems,foodSelected,restInfo }) {
  const [isOpen, setIsOpen] = useState(true);
   const [pics,setPics]=useState([]);
console.log(menuItems,"menuotem is here");

  if ("categories" in menuItems)
     {
     return (
      <div className="w-full">
        <p className="text-2xl font-bold">{menuItems?.title}</p>
        <div>
          {menuItems?.categories.map((items) => (
            <MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected} restInfo={restInfo}></MenuCard>
          ))}
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "˅" : "˄"}
          </button>
        </div>
        <div className="h-5 bg-gray-600 mt-2 mb-2"></div>
      </div>
    );
  }
  if(foodSelected==="veg")
  {
    return (
        <div className="w-full bg-green-100">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          <button className="text-3xl mr-10" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "˅" : "˄"}
          </button>
        </div>
        <div>
          {menuItems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items) => (
            <RestInfo
              key={items?.card?.info?.id}
              restData={items?.card?.info}
              restInfo={restInfo}
            ></RestInfo>
          ))}
        </div>
        <div className="h-5 bg-gray-600"></div>
      </div>
    )
  }
 else  if(foodSelected==="nonVeg")
    {
      return (
          <div className="w-full bg-orange-100">
          <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-3xl mr-10" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "˅" : "˄"}
            </button>
          </div>
          <div>
            {menuItems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info))?.map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
                restInfo={restInfo}
              ></RestInfo>
            ))}
          </div>
          <div className="h-5 bg-gray-600"></div>
        </div>
      )
    }
  return (
    <>
        {/* <div className='flex   justify-between shadow-md'>
            <img className='object-cover w-[40%] h-[150px] p-2 shadow-md border-1 rounded-2xl' 
             src={ "https://media-assets.swiggy.com/swiggy/image/upload/"+(restData?.info?.cloudinaryImageId || 
              restData?.info?.cloudinaryImageId )}></img>
             <div className='w-[60%] p-4 flex flex-col gap-2'>
             <h2 className=' text-start text-3xl font-semibold border-b-2 '>{restData?.info?.name||restData?.info?.feeDetails.name}</h2>
             <p className='font-semibold text-xl'>{restData?.info?.avgRating}</p>
             <p className='font-semibold text-xl'>
              <span className='text-xl font-medium'>Delivery time:</span>
              {restData?.info?.sla?.slaString}
              </p>
              <p className='font-semibold text-xl'>Address:{restData?.info?.areaName}</p>
             </div>
           </div> */}
      <div className=" mx-auto">
        <div className="flex justify-between ">
          <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
          <button className="text-3xl mr-10" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "˅" : "˄"}
          </button>
        </div>
         {/* <div className="topics">
          {
            menuItems.carousel.map((pics)=>(
                    <img src={pics.image} alt="no"></img>
            ))
          }
         </div> */}
        <div>
          {menuItems?.itemCards?.map((items) => (
            <RestInfo
              // key={items?.card?.info?.id}
              restData={items?.card?.info}
              restInfo={restInfo}
            ></RestInfo>
          ))}
        </div>
        <div className="h-3 bg-gray-600"></div>
      </div>
    </>
  );
}
