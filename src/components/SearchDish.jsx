import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import SearchDishInfo from "./SearchDishInfo";
import { latContext, lngContext } from "./ContextApi";
import veg from "../iconImages/veg.png";
import nonVeg from "../iconImages/nonVeg.png";
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
    setInput(name);
  }, [name]); // console.log(name,"name");

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
    // console.log("all dish", dish);
  }
  function getFilterData(filter) {
    console.log("filter", dish);
    // let filterData;
    if (filter === "veg") {
      console.log("veg yes");
      setFilterData(dish.filter((item) => item?.card?.card?.info?.isVeg));
    } else if (filter === "non-veg") {
      console.log("nonveg yes");
      setFilterData(dish.filter((item) => !item?.card?.card?.info?.isVeg));
    } else if (filter === "₹300 - ₹800") {
      // (item?.card?.card?.info?.price/100)<=100)
      // console.log("300- 600 yes");
      setFilterData(
        dish.filter(
          (item) =>
            item?.card?.card?.info?.price/100 >300 &&
            item?.card?.card?.info?.price/100 <= 800
        )
      );
    } else if (filter === "Less than ₹300") {
      // console.log("less than -300 yes", item?.card?.card?.info?.price / 100);

       setFilterData(
        dish.filter(
          (item) =>  item?.card?.card?.info?.price/100 <= 300))
    }
    // setDish(filterData);
  }
  useEffect(() => {
    console.log("effect func",input);
//
    fetchDish(input);
  }, [lat, lng, input]);
  console.log("dish data", dish);
  function getDish() {
    // if(search)
    // yaha pe jo bhi sidh he usme dish word add karna pdega agar nahi he to tabhi data aayega
    console.log('yes called',search);
    
    fetchDish(search);
  }
  // ⭐💰🥗
  return (
    <>
      <div className=" w-[80%] flex  flex-col md:flex-row md:mx-auto lg:flex-row lg:gap-2 lg:mx-auto  mt-30   ">
        <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row gap-2 w-[100%] mb-10">
          {[`veg`, `non-veg`, "Ratings", "₹300 - ₹800", "Less than ₹300"].map(
            (filter, i) => (
              <button
                key={i}
                // from-orange-500 to-orange-300
                onClick={() => getFilterData(filter)}
                className=" w-auto py-2 px-4 rounded-full font-semibold text-lg shadow-md bg-gradient-to-r from-orange-200 to-orange-400  text-black hover:scale-105 hover:shadow-xl transition"
              >
                {filter == "veg" ? (
                  <div>
                    <span className=" text-green-600  bg-green-600 ">
                      veg
                    </span>
                    <span>veg</span>
                  </div>
                ) : filter == "non-veg" ? (
                  <div>
                    <span className=" text-red-600 bg-red-600 ">
                      veg
                    </span>
                    <span>non-veg</span>
                  </div>
                ) : (
                  <div>
                    {/* <span className="w-2 h-2 bg-green-600"></span> */}
                    {/* <span>{filter}</span> */}
                    {filter}
                  </div>
                )}
              </button>
            )
          )}
        </div>
        <div className="search relative flex w-[270px] sm:w-[290px] md:w-[320px] lg:w-[360px] h-[60px] ">
          <input
            type="text"
            placeholder="Search Dish..."
            className=" flex  shadow-2xl border-2 w-[250px] sm:w-[250px] md:w-[300px] h-[50px]   text-black text-xl  rounded-xl "
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            onClick={() => getDish()}
            className="sm:absolute  sm:right-0 place-items-center bg-none text-orange-400 shadow-md rounded-xl h-[46px] text-3xl w-[50px]"
          >
            +
          </button>
        </div>
      </div>

      <div
        className="w-[80%]  gap-0 mx-auto flex flex-row   md:flex-row  md:justify-between items-center align-middle mt-3 
      text-3xl font-bold "
      >
        {/* <h3 className="">Top dishesh near you</h3> */}
      </div>

      <div className="w-[75%] p-2 flex flex-col mx-auto  items-center justify-center align-middle rounded-2xl">
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 sm:gap-12 md:grid-cols-3  md:gap-20 lg:grid-cols-4 lg:gap-20    pt-10">
          {filterData?.length
            ? filterData.map((item) => (
                <SearchDishInfo item={item}></SearchDishInfo>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
export default SearchDish;
