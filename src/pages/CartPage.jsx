import React, { useState } from 'react'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartContext } from '../components/ContextApi'
import { clearCart, decrementItem, incrementItem } from '../Stored/CartSlicer'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseAuth"; 
const CartPage = () => {
    let data=useSelector(state=>state.cartSlice.items);
    let userData=useSelector(state=>state.authSlice.userData);
    let restData=useSelector(state=>state.cartSlice.restInfo);
    // let restInfo=useSelector(state=>state.cartSlice.)
    // console.log("cart data",restData.info.id);
     const [pay,setPay]=useState(true);
      const dispatch=useDispatch();
      const navigate=useNavigate();
      let sum=0;
     console.log(data[0]?.price,data[0]?.defaultPrice);
     
     for(let value of data)
      sum+=(value.price||value.defaultPrice)*value.quantity;
     let tax=Math.floor(((sum/100)*2)/100);
    console.log("data",data);
  //  let {cartData,setCartData}=useContext(cartContext);
  const placeOrder = async (userId, cartItems, total) => {
  try {
    // Firestore subcollection: users/{userId}/orders
    const ordersRef = collection(db, "users", userId, "orders");

    // addDoc returns a reference with the new document ID
    const orderDoc = await addDoc(ordersRef, {
      items: cartItems,
      totalAmount: total,
      paymentMode: pay ? "Cash on Delivery" : "Online",
      createdAt: serverTimestamp(),
    });

    console.log("Order placed with ID:", orderDoc.id);
  } catch (error) {
    console.error("Error placing order:", error);
  }
};
function handleOrder(user) {
  console.log(user,"userinfo");
  
  if (user && user.uid) {
    const userId = user.uid;
    placeOrder(userId, data, (sum / 100) + tax); // Pass cart data + total

    toast.success("Order placed successfully!", {
      style: { fontSize: "20px", fontWeight: "bold" },
    });
  } else {
    navigate("/Login");
  }
}
  function handleClearCart()
  {
    toast.success('Cart is Clear',{
                style:{
                  fontSize:"20px",
                  fontWeight:"bold"
                }
               });
  }
     function remove(item)
     {
    //     let newCartdata=cartData.filter((data)=>data.id!=ind);
    //  setCartData(newCartdata)
       
       dispatch(decrementItem(item));
        toast.error('Remove Item',{
                style:{
                  fontSize:"20px",
                  fontWeight:"bold"
                }
               })
    // data=data.filter((item)=>item.id!=ind)
    // console.log(data);
    //  localStorage.setItem("cartData",JSON.stringify(data));
     }
     function clearData()
     {
      //  setCartData([]);
      //   localStorage.setItem("cartData",JSON.stringify([]));
        // localStorage.clear();
               dispatch(clearCart());
               toast.success('Cart is Empty',{
                style:{
                  fontSize:"20px",
                  fontWeight:"bold"
                }
               })
     }
     if(data.length==0)
      return (
              <div className='flex flex-col  mt-20 '>
                <h1 className='text-2xl font-bold text-center'>Your Card is Empty</h1>
                <button className='text-3xl font-bold text-center text-orange-600'>Click Me To Order Now</button>
              </div>
             )
  return (
    //  w-[70%]  flex  justify-center align-middle gap-7 mx-auto flex-wrap mt-20 text-center
    <div className=' flex flex-col  mx-auto md:flex-row md:mx-auto md:justify-between '>
     
    <div className=' w-[45%] flex flex-col ml-10  p-1 mx-auto '>
           <div className='flex flex-col    md:flex-row   justify-between '>
            <img className='object-cover w-full md:w-[40%] h-[150px] p-2 shadow-md  rounded-2xl' 
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
           </div>
           <hr></hr>

    <div className=' w-[100%] flex flex-col gap-2    shadow-md p-2'>
         {
               
      data.map((item,i)=>(
  //  /     console.log(j,j);
        
         <div className=" flex flex-col-reverse   md:flex-row  border-b-1 rounded-xl">
          {/* details section */}
                <div className=" w-[70%] flex flex-col gap-2">
                  <p className=" text-xl text-gray-700 font-bold mb-1 w-[50%]">
                    {item?.name}
                  </p>
                  {/* <p>{"₹" +Number(restData?.variantsV2?.pricingModels?.[0]?.price/100)}</p> */}
                  <p className="text-2xl font-semibold">₹{(item.price/100 || item.defaultPrice/100)*item.quantity}</p>
                  {/* <span className="text-green-700 text-xl font-semibold mt-2">
                    {item?.ratings?.aggregatedRating?.rating}
                  </span>
                  <span className="text-xl font-semibold mt-2">
                    {"(" + item?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
                  </span>
                  <p className="text-xl font-semibold mt-2">{item?.description}</p> */}
                  
                </div>

                {/* image section */}
                <div className="relative h-40 ">
                  <img
                    className=" h-25  w-35 object-cover p-2 rounded-xl shadow-md border-white "
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/" +
                      item?.imageId
                    }
                  ></img>
                  
                    <div className='flex absoulte bottom-0 left-10 text-green-600 bg-white shadow-md border-1 rounded-xl text-xl p-1 gap-1 rounde justify-between w-[80px]'>
                     <button onClick={()=>dispatch(incrementItem(item))}>+</button>
                     <span>{item.quantity}</span> 
                     <button onClick={()=>dispatch(decrementItem(item))} >-</button>
                     </div>
                      {/* // <button */}
                      {/* //   className="absolute  bottom-0 left-10 shadow-md border  rounded-xl 
                      //    text-red-600 px-1 py-1 bg-white  font-semibold"
                      //   onClick={() => { */}
                         
                      {/* //     (remove(item));
                         
                      //   }}
                      // >
                      //   Remove */}
                      {/* // </button> */}
                     
                  {/* } */}
                </div>
              </div>

          ))
    }
    </div>
      <div className=' flex items-center md:items-start justify-between'>
        {
          data.length>0?(
    <button className=' bg-green-600 py-2 text-center w-full rounded-xl shadow-md m-5 text-2xl font-bold' 
    onClick={()=>clearData()}>ClearCart</button>)
    :(null)
         } 
         </div>

   
    </div>
    <div className='w-[20%] md:w-[55%] sticky'>
          <div className='bg-gray-300 flex flex-col w-[350px] h-[460px] mt-[12%] md:ml-[25%] 
          sticky top-[12%] z-50 p-2 gap-3 shadow-md'> 
              <h1 className=' text-3xl font-semibold border-b-1 p-2 shodow-md'>Order Summary</h1>
              <div className='flex flex-col gap-3 p-2'>
                <h2 className='text-2xl text-gray-700 '>Delivery Address</h2>
                <div className='flex flex-col md:flex-row justify-between'>
                  <input type='text' placeholder='No Adress Found' className='text-xl w-auto'></input>
                  <button>change</button>
                </div>
                <div className=' flex flex-col md:flex-row justify-between bg-white p-2'>
                  <span>{pay==true?"Cash On Delivery":"Online Pay"}</span>
                  <button onClick={()=>setPay(!pay)}>set</button>
                  
                </div>
                <hr></hr>
              </div>
              <div className='p-2 flex flex-col gap-3'>
                <div className='flex justify-between text-xl text-gray-600'>
                     <span>Price</span>
                     <span>₹{sum/100}</span>
                </div>
                <div className='flex justify-between text-xl text-gray-600'>
                        <span>Shipping</span>
                     <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between text-xl text-gray-600'>
                      <span>Tax(2%)</span>
                     <span>₹{tax}</span>
                </div>
                <div className='flex justify-between text-xl text-gray-600'>
                       <span>Total</span>
                     <span>₹{sum/100+tax}</span>
                </div>
              </div>
              <div  className='p- flex flex-col gap-3'>
                <button className='p-1 text-white bg-green-600 text-2xl rounded-xl' onClick={()=>handleOrder(userData)}>Place Order</button>
                {/* <button></button> */}
              </div>
          </div> 
         
    </div>
     
    </div>
  )
}

export default CartPage
