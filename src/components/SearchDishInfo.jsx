import React from 'react'
import { useState } from 'react';
import veg from "../iconImages/veg.png";
import nonVeg from "../iconImages/nonVeg.png";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrementItem, incrementItem } from '../Stored/CartSlicer';
import toast from 'react-hot-toast';
const SearchDishInfo = ({item}) => {
    // const [count,setCount]=useState(0);

    console.log("item is",item?.card?.card?.restaurant);
   const items = useSelector((state) => state.cartSlice.items);
  // const data=items.find((item)=>item.id==restData.id);
  // const items=JSON.parse(localStorage.getItem("cartData"));
  // console.log("items", items);
  // console.log("retsdata",restInfo);
  

  // const counter=JSON.parse(localStorage.getItem('cnt'))
  const data = items.find((itemC) => itemC.id == item?.card?.card?.info?.id);
  // console.log("data", data);
  const [isDiffrent,setIsDiffrent]=useState(0);
  let count;
  data == undefined ? (count = 0) : (count = data.quantity);
  // console.log(count,"yes this count");
  
     const dispatch= useDispatch();
     function handleAddItem()
     {
       const prv=JSON.parse(localStorage.getItem('restInfo'));
       if(prv===null   || item?.card?.card?.restaurant?.info?.id==prv?.info?.id)
       {
        const restData=item ?. card?.card?.info;
        const restInfo=item?.card?.card?.restaurant
        dispatch(addItem({restData ,restInfo}));
        // toast.success('Item Added SuccessFully');
       }
       else{
        //  setIsDiffrent((prv)=>!prv);
         console.log("but",item.card.card.restaurant,prv);
         
         console.log("nonono");
         
       }

     }
    //  const dispatch=useDispatch();
    // function handleAddItem()
    // {
    //   setCount(1);
    //   dispatch(addItem(item));
    // }
    // function handleIncrementItem()
    // {
    //     setCount(count+1);
    //      dispatch(IncrementItem(item));
    // }
    // function handleDecremetItem()
    // {
    //     setCount(count-1);
    //     dispatch(DecrementItem(item));
    // }
  return (
  <div
              className=" h-[350px] w-[400px] rounded-xl flex gap-4 p-2 shadow-md transition-xl  relative"
            >
              <div className="flex flex-col text-2xl font-bold mt-8 gap-3 w-[200px]">
                {/* <p className={"w-5 h-5" item?.card?.card?.info?"veg":"" }></p> */}
                {item?.card?.card?.info.hasOwnProperty("isVeg") ? (
                  <img src={veg} className="w-7 h-7"></img>
                ) : (
                  <img src={nonVeg} className="w-7 h-7"></img>
                )}
                <p>{item?.card?.card?.restaurant?.info?.name||"kkk"}</p>
                
                <p>{item?.card?.card?.info?.name}</p>
                <p className="hover:text-3xl">₹{item?.card?.card?.info?.price / 100}</p>
                {/* {
                  count===0?(<button className="absolute  bottom-1 left-20 shadow-md border  rounded-xl 
         text-white px-4 py-2 bg-green-600 text-xl font-semibold text-center" onClick={()=>handleAddItem()}>Add to Cart</button>)
                 :(
       <div className='flex absolute  bottom-1 left-20 shadow-md border  rounded-xl 
                 text-white px-4 py-2 bg-green-600 text-xl font-semibold gap-3 items-center' >
        <button onClick={()=>dispatch(incrementItem(item?.card?.card?.info))} >+</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(decrementItem(item?.card?.card?.info))} >-</button>
        </div>
  )
                } */}
                               {
  //   count===0?(<button className="absolute  bottom-1 left-20 shadow-md border  rounded-xl 
  //                text-white px-4 py-2 bg-green-600 text-xl font-semibold" onClick={()=>handleAddItem()}>Add to Cart</button>):(
  //      <div className='flex absolute  bottom-1 left-20 shadow-md border  rounded-xl 
  //                text-white px-4 py-2 bg-green-600 text-xl font-semibold gap-3' >
  //       <button onClick={()=>handleDecremetItem}>-</button>
  //       <span>{count}</span>
  //       <button onClick={()=>handleIncrementItem}>+</button>
  //       </div>
  // )
  // onClick={()=>dispatch(addItem())}
    count===0?(<button className="absolute  bottom-1 shadow-md border  rounded-xl 
         text-white px-4 py-2 bg-green-600 text-xl font-semibold text-center" onClick={()=>handleAddItem()}>Add to Cart</button>)
                 :(
       <div className='flex absolute  bottom-1 left-20 shadow-md border  rounded-xl 
                 text-white px-4 py-2 bg-green-600 text-xl font-semibold gap-3 items-center' >
        <button onClick={()=>dispatch(incrementItem(item?.card?.card?.info))} >+</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(decrementItem(item?.card?.card?.info))} >-</button>
        </div>
  )


    
  }
                {/* <span className="w-22 h-auto bg-green-600  text-2xl font-bold text-center rounded-xl p-2 mt-10">Add</span> */}
                {/* <p className="overflow-hidden font-normal ">{item?.card?.card?.info?.description}</p> */}
              </div>
              <div className='w-[240px] h-[200px]'>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                    item?.card?.card?.info?.imageId
                  }
                  className="object-cover mt-10 rounded-xl p-2 "
                />

              </div>
            </div>
  )
}

export default SearchDishInfo
