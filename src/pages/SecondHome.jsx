import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { Link } from "react-router";
import { cartContext } from "../components/ContextApi";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
// import assets from "../assets/profile_icon.png";
import { removeUser } from "../Stored/authSlicer";

import Hero from "../components/Hero";
import Header from "../components/Header"
const SecondHome = () => {
  const counter = useSelector((state) => state.cartSlice.items);
  const data = useSelector((state) => state.authSlice.userData);
  // console.log(counter,"is cnt");
  const dispatch = useDispatch();
  const [ProfileDetail, setProfileDetail] = useState(0);
  const userData = useSelector((state) => state.authSlice.userData);
  const restInfo = useSelector((state) => state.cartSlice.restInfo);

  console.log("second", data);
  const logo = ["F", "o", "o", "d", "i", "e"];
 
  let { cartData, setCartData } = useContext(cartContext);
  const [theme, setTheme] = useState("light");
  const [select, setSelect] = useState(0);
  function removeData() {
    dispatch(removeUser());
  }
  function detail() {
    return (
      <ul className="absolute bg-gray-100 text-xl font-semibold text-black  rounded-xl w-[100px]  p-2">
        <li
          className="hover:text-orange-600 cursor-pointer border-b"
          onClick={() => setProfileDetail(!ProfileDetail)}
        >
          {userData.name}
        </li>
        <li
          className="hover:text-orange-600 cursor-pointer border-b"
          onClick={() => {
            removeData();
            setProfileDetail(!ProfileDetail);
          }}
        >
          LogOut
        </li>
        {/* <li></li> */}
      </ul>
    );
  }
  return (
    <>
    <Header></Header>

      <Outlet></Outlet>
    </>
  );
};

export default SecondHome;
