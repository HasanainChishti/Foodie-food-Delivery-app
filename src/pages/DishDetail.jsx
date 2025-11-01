import React from 'react'
import { useLocation } from 'react-router';
import veg from "../iconImages/veg.png";
import nonVeg from "../iconImages/nonVeg.png";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrementItem, incrementItem } from '../Stored/CartSlicer';
import Footer from '../components/Footer';
const DishDetail=()=>{
     let locaion=useLocation();
     let item= locaion.state||{};
     console.log(item);
       const items = useSelector((state) => state.cartSlice.items);
       const data = items.find((itemC) => itemC.id == item?.item?.card?.card?.info?.id);
       let count;
  data == undefined ? (count = 0) : (count = data.quantity);
  console.log(count,"cnt is",);
  
     const dispatch= useDispatch();
   function handleAddItem()
       {
         const prv=JSON.parse(localStorage.getItem('restInfo'));

   
          // const restData=item ?. card?.card?.info;
          // const restInfo=item?.card?.card?.restaurant
          // dispatch(addItem({restData ,restInfo}));
          dispatch(addItem(item?.item?.card?.card?.info));
         
       }
   return (
    <>
   <div className=" mt-10 flex ">
                   
                 
                     <div className="left w-[50%] h-[420px] ml-5 relative ">
                    <img src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                    item?.item?.card?.card?.info?.imageId} className=' shadow-md w-full h-[400px] rounded-2xl border-1 text-orange-400'></img>
                     <span className=''>
                         {item?.card?.card?.info.isVeg ? (
                                         <img src={veg} className="w-7 h-7 absolute top-2 left-2"></img>
                                       ) : (
                                         <img src={nonVeg} className="w-7 h-7 absolute top-2 left-2"></img>
                                       )}
                                       </span>
                                       <span className="text-green-600 text-xl absolute top-2 right-2" >{item?.item?.card?.card?.info?.ribbon.text}</span>
                   </div>
                    
                  <div className="right w-[50%]  flex flex-col gap-10 text-2xl text-gray-700 font-semibold pl-10 mt-5">
                     {/* <div className="details text-2xl text-gray-700 font-semibold pl-2"> */}
                    <h3>{item?.item?.card?.card?.info?.name}</h3>
                    <h4>{item?.item?.card?.card?.info?.description}</h4>
                   {/* </div> */}
                   {/* <div className='flex flex-col w-[200px] text-2xl text-gray-600 pl-2'> */}
                    <h3>Ratings: <span className='text-green-400'>{item?.item?.card?.card?.info?.ratings?.aggregatedRating
?.rating} </span></h3>
                    <h4> ₹{(item?.item?.card?.card?.info?.price)/100}</h4>
                   {/* </div> */}
                   {
                        count===0?(<button className="   shadow-md border  rounded-xl 
                             text-white px-4 py-2 bg-green-500 text-xl font-semibold text-center" onClick={()=>handleAddItem()}>Add to Cart</button>)
                                     :(
                           <div className='flex   shadow-md border  rounded-xl 
                                     text-white px-4 py-2 bg-green-600 text-2xl font-semibold gap-3 justify-center align-middle items-center w-[120px] ' >
                            <button onClick={()=>dispatch(incrementItem(item?.item?.card?.card?.info))} >+</button>
                            <span>{count}</span>
                            <button onClick={()=>dispatch(decrementItem(item?.item?.card?.card?.info))} >-</button>
                            </div>
                                     )
                        }
                  </div>
                                     
             
   </div>
   <Footer></Footer>
   </>
   )
}
export default DishDetail;