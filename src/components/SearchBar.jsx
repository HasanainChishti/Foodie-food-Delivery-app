import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setF,  setLocation,  setT } from "../Stored/TempSlicer";
import { useContext } from "react";
import { latContext, lngContext } from "./ContextApi";

const SearchBar = () => {
  const [search, setSearch] = useState([]);

  console.log("search data", search);
  // console.log(""status);
  let { lat, setLat } = useContext(latContext);
  let { lng, setLng } = useContext(lngContext);
  const statuss = useSelector((state) => state.tempSlice.status);
  const loc=useSelector((state)=>state.tempSlice.location);
  console.log("status is",statuss);
  const dispatch = useDispatch();
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('location'))||"" );
 
  async function searchRes(l) {
    setValue(l);
    console.log("working");
    
    dispatch(setT(1))
    console.log("value lenth is", value.length);

    const res = await fetch(
      `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/place-autocomplete?input=${l}`
    );
    const data = await res.json();
    console.log("nedde data", data);


    setSearch(data.data);
  }
  // useEffect(()=>{
 async function fetchLatAndLng(id) {
    if (id == "") return;
  dispatch(setF())
    const res = await fetch(
      `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/address-recommend?place_id=${id}`
    );
    const data = await res.json();
    setLat(data.data[0].geometry.location.lat);
    // lat=data.data[0].geometry.location.lat;

    // lng=data.data[0].geometry.location.lng;
    setLng(data.data[0].geometry.location.lng);
    // dispatch(setRestData());
    console.log("id", id);
  }
  // fetchLatAndLng();
  // },[lat,lng])
  
 
  return (
   
      <div className=" ">
       
        <input
          placeholder="Location"
          type="text"
          className="outline-none  text-black font-bold bg-gray-50 rounded-2xl px-2 py-4  "
          onChange={(e) =>
            e.target.value != ""
              ? searchRes(e.target.value)
              :  (dispatch(setF(0)),setValue(''))
          }
           value={value}></input>

        {statuss&&search.length > 0  ?
         (
          <ul className="absolute w-70 bg-white shadow rounded mt-2 max-h-48 overflow-y-auto z-10">
            {search.map((loc, index) => (
              <li
                key={index}
                onClick={() => {
                  fetchLatAndLng(loc.place_id);
                  // dispatch(setF(0));
                  dispatch(setLocation(loc.structured_formatting?.main_text));
                  setValue(loc.structured_formatting?.main_text);
                      localStorage.setItem('location',JSON.stringify(loc.structured_formatting?.main_text));
                }}
                className="cursor-pointer px-3 py-2 hover:bg-orange-100 border-b"
              >
                <strong>{loc.structured_formatting?.main_text}</strong>
                <p className="text-sm text-gray-500">
                  {loc.structured_formatting?.secondary_text}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
       
      </div>
 
    //  </div>
  );
};

export default SearchBar;
