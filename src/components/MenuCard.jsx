import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseQuantity, decreaseQuantity} from "../Stored/CartSlice.jsx";

// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart,
// }  from "../Stored/CartSlice"

const MenuCard = ({item}) => {
    const dispatch = useDispatch();
    
    // const [quantity,setQuantity] =useState(0);
    // console.log(item.quantity,"quantity check");
    // let data = useSelector((state)=>state?.items)||[]
    // console.log(data,"data");
    // data= data.find((cartitem)=>cartitem.id === item.id)
    const cartItems = useSelector((state) => state.cart.items);
const cartQuantity = useSelector((state) => {
  const cartItem = state.cart.items.find(
    (cartItem) => cartItem.id === item.id
  );

  return cartItem?.quantity ?? 0;
});

let quantity = cartQuantity ||0
// console.log("CART QUANTITY:", cartQuantity);
// console.log("MENU ITEM CART:", cartItems);
    // let quantity = data?.quantity || 0;
    // console.log("in menucard components",item);
    
  return (
     <article className="group flex gap-4 rounded-2xl border border-[#262626] bg-[#181818] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-[#1c1c1c]">
          <img
            src={item.image}
            alt={item.name}
            className="h-24 w-24 shrink-0 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
          />
    
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
    
                <p className="mt-1 text-sm leading-6 text-neutral-400">
                  {item.description}
                </p>
              </div>
    
              <p className="shrink-0 font-semibold text-white">
                ₹{item.price}
              </p>
            </div>
             {
          quantity>0 ? (
            // <button className='rounded-2xl px-4 py-2 text-sm text-white'>
            //     {quantity}
            // </button>
          <div className="flex items-center gap-3 mt-2 border w-fit rounded-full border-neutral-700">
  <button
    onClick={() => dispatch(decreaseQuantity(item.id))}
    className="flex h-8 w-8 items-center justify-center   text-lg text-white transition-all duration-200 hover:border-[#F59E0B] hover:text-[#F59E0B]"
  >
    −
  </button>

  <span className="min-w-5 text-center text-sm font-semibold text-white">
    {quantity}
  </span>

  <button
    onClick={() => dispatch(increaseQuantity(item.id))}
    className="flex h-8 w-8 items-center justify-center   text-lg text-white transition-all duration-200 hover:border-[#F59E0B] hover:text-[#F59E0B]"
  >
    +
  </button>
</div>
          ) : 
          (<button 
            className="mt-4 rounded-full border border-[#F59E0B] px-4 py-1.5 text-sm
             font-semibold text-[#F59E0B] transition-all duration-300 hover:bg-[#F59E0B] 
             hover:text-[#111111]"
             onClick={()=>dispatch(addToCart(item))
        }
             >
              + Add
            </button>)
             }
          
          </div>
        </article>
  )
}

export default MenuCard
