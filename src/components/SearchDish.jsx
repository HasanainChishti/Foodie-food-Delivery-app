import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import SearchDishInfo from "./SearchDishInfo";
import { latContext, lngContext } from "./ContextApi";
const SearchDish = ({ search }) => {
  let { name } = useParams();
  const [dish, setDish] = useState([]);

  const [input, setInput] = useState(name==null?"":name || "biryani");
  const [cnt, setCnt] = useState(0);
  const {lat}=useContext(latContext);
  const {lng}=useContext(lngContext)
  console.log("this is search", input);
console.log('lat',lat, 'lng',lng);

  console.log(name,"name");

  //to many re renders error
  //  if(name!=undefined)
  //   setInput(name)
  // name=search;
  console.log("item is", name);

  async function fetchDish(input) {
      const res = await fetch(
        `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${input}&trackingId=48761fc8-9fe0-4d35-684d-41bb95bb5d83&submitAction=ENTER&queryUniqueId=e96aad3b-033c-b898-bf98-b715cc8223d0`
      );
      const data = await res.json();
      // console.log("data",data);
      
      const dishData = data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
      // const RestdishData=data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
      // console.log("dishdata", dishData);
      // console.log("dishdata", RestdishData);

      const filterData = dishData?.filter((card) => card?.card?.card.info);
      setDish(filterData);
      // console.log("all dish", dish);
    }
  useEffect(() => {
  
    fetchDish(input);
  }, [lat,lng]);
  console.log("dish data",dish);
  function searchDish(input)
  {
      fetchDish(input);
  }
  return (
    <>
    <div className="w-[70%] mx-auto flex flex-col md:flex items-center align-middle mt-10 text-2xl font-bold ">
      <input type="text" placeholder="Enter dish name" className=" flex bg-white border-b-1 p-3  "
       onChange={(e)=>(setInput(e.target.value))}
        value={input}
       /> 
       <button onClick={()=>searchDish(input)} >Search</button>
    </div>
   
     
      <div className=" w-[90%] flex-col mx-auto  items-center justify-center align-middle rounded-2xl">

        
        <div className=" flex flex-wrap gap-8  mx-auto justify-center pt-30 ">
        {(dish?.length )?dish.map((item) => (
              <SearchDishInfo item={item}></SearchDishInfo>
          )):null}
      </div>
    </div>
    </>
  
  );
};
export default SearchDish;
