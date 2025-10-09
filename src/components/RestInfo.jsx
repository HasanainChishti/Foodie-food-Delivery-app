import { useContext, useState } from "react";
import { addItem, incrementItem, decrementItem,clearCart } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";
import { cartContext } from "./ContextApi";
import { jsxs } from "react/jsx-runtime";
import toast, { Toaster } from "react-hot-toast";
export default function RestInfo({ restData, restInfo }) {
  let [count, setCount] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartSlice.items);
  // const data=items.find((item)=>item.id==restData.id);
  // const items=JSON.parse(localStorage.getItem("cartData"));
  // console.log("items", items);
  // console.log("retsdata",restInfo);
  const [more,setMore]=useState(0);

  // const counter=JSON.parse(localStorage.getItem('cnt'))
  const data = items.find((item) => item.id == restData.id);
  // console.log("data", data);
  const [isDiffrent,setIsDiffrent]=useState(0);
  let counter;
  data == undefined ? (counter = 0) : (counter = data.quantity);

  // console.log("counter", counter);

  //  const obj=items.find(item=>item.id==restData.id);
  //  const count=obj? obj.quantity:0;

  // function handleAddItem()
  // {
  // //   setCount(1);
  // // count--;
  //   dispatch(addItem(restData,Restid));
  // }
  // function handleIncrementItem()
  // {
  //     // setCount(count+1);
  //      dispatch(IncrementItem(restData,Restid));
  // }
  // function handleDecremetItem()
  // {
  //     // setCount(count-1);
  //     dispatch(DecrementItem(restData,Restid));
  // }
  // let { cartData, setCartData } = useContext(cartContext);
  // console.log("cartData",cartData);
  // function add() {

  //   setCount(count + 1);
  // if (cartData.find((data) => data.id === restData.id))
  //     alert("already added");

  //   else {
  //    let getRestIdFromLocalStorage=localStorage.getItem('Restid',JSON.stringify(Restid))||undefined;
  //     if(cartData.length===0 || Restid===getRestIdFromLocalStorage)
  //     {
  //              localStorage.setItem('Restid',Restid);
  //           let id=localStorage.getItem('Resrid',JSON.stringify(Restid));
  //       setCartData((cartData) => [...cartData, restData]);
  //       alert('item Added Succesfully')
  //       localStorage.setItem("cartData",JSON.stringify([...cartData,restData]));
  //     }
  //     else
  //     {
  //       alert('diffrent Restaurant Item');
  //     }

  //   }

  //   console.log("Added to cart:", restData);
  //   console.log("All Cart ", cartData);

  // }
  // function remove() {
  //   setCount(count - 1);
  //   setCartData(cartData.filter((data)=>data.id!=restData.id))
  //   alert("item Removed Succesfully")

  // }

      function handleCart()
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
               setIsDiffrent();
     }

     function handleAddItem()
     {
          const prv=JSON.parse(localStorage.getItem('restInfo'));
          // console.log(prv,restInfo,"but why");
          if( prv==null ||  prv.info.id===restInfo.info.id )
           dispatch(addItem({restData,restInfo}));
         else{
             console.log('no match');
             setIsDiffrent((prv)=>!prv);
            // toast.error("Diffrent Restaurants", {
            //         style: {
            //           fontSize: "20px",
            //           fontWeight:"bold"
            //         },
            //       });
      }
          // if(prv)
         
     }
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:justify-between  mb-4 pb-2 gap-7">
        <div className="w-[70%] flex  flex-col gap-0.5">
          <p className=" text-2xl text-gray-900 font-semibold mb-1 ">
            {restData?.name}
          </p>
          {/* <p>{"₹" +Number(restData?.variantsV2?.pricingModels?.[0]?.price/100)}</p> */}

          <p className="text-2xl font-semibold">{"₹" +( restData?.price)/100}</p>
          
          {
            restData?.ratings?.aggregatedRating?.rating&&<span className="text-green-700 text-xl font-semibold mt-2">
            {restData?.ratings?.aggregatedRating?.rating}
            <span className="text-xl font-semibold mt-2">
            {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>
          </span>}
        
           <p className="text-xl  mt-2 text-gray-600">{more==0? (restData?.description?.slice(0,150)+"..."):
            (restData?.description+"...")
           }
            {
              more?<button className="text-gray-600 text-xl" onClick={()=>setMore(!more)}>less</button>:(<button className="text-gray-600 text-xl" onClick={()=>setMore(!more)}>more</button>)
            }

            </p>
          {/* {
            more?(<p className="text-xl  mt-2 text-gray-600">{ restData?.description}</p>):
            (<p className="text-xl  mt-2 text-gray-600">{ restData?.description.slice(0,200)}</p>)
             
          } */}
        </div>
        <div className="relative h-55">
          <img
            className="w-60 h-50 object-cover  rounded-xl  border-white "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restData?.imageId
            }
          ></img>
          {
            // count===0?( <button className="absolute  bottom-1 left-20 shadow-md border  rounded-xl
            //  text-green-600 px-4 py-2 bg-white text-xl font-semibold" onClick={()=>handleAddItem()} >Add</button>):(
            //     <div className="flex absolute  bottom-1 left-20 shadow-md border  rounded-xl
            //  text-green-600 px-6 py-2 bg-white text-xl font-semibold gap-3">
            //         <button  onClick={()=>handleIncrementItem()} className="border-r flex justify-center align-middle ">+</button>
            //         <span>{count}</span>
            //         <button onClick={()=>handleDecremetItem()} className="border-l">-</button>
            //         </div>
            //  )
            // count === 0 ? (
            //   <button
            //     className="absolute  bottom-1 left-20 shadow-md border  rounded-xl
            //      text-green-600 px-4 py-2 bg-white text-xl font-semibold"
            //     onClick={() => add()}
            //   >
            //     Add
            //   </button>
            // ) : (
            //   <div
            //     className="flex absolute  bottom-1 left-20 shadow-md border  rounded-xl
            //      text-green-600 px-6 py-2 bg-white text-xl font-semibold gap-3"
            //   >
            //     <button
            //       className="border-r flex justify-center align-middle "
            //       onClick={() => add()}
            //     >
            //       +
            //     </button>
            //     <span>{count}</span>
            //     <button className="border-l" onClick={() => remove()}>
            //       -
            //     </button>
            //   </div>
            // )
            counter == 0 ? (
              <button
                className="absolute  bottom-1 left-20 shadow-md border  rounded-xl 
                 text-green-600 px-4 py-2 bg-white text-xl font-semibold"
                onClick={() => {
                 
                  (handleAddItem());
                 
                }}
              >
                Add
              </button>
            ) : (
              <div
                className="flex justify-between absolute w-[130px] bottom-1 left-14 shadow-md    
                 text-green-600 px-3 py-3 bg-white text-2xl font-semibold rounded-xl "
              >
                <button
                  className=" flex   text-2xl"
                  onClick={() => dispatch(incrementItem(restData))}
                >
                  +
                </button>
                <span>{counter}</span>
                <button
                  className=" flex   text-2xl"
                  onClick={() => dispatch(decrementItem(restData))}
                >
                  -
                </button>
              </div>
            )
          }
        </div>
      </div>
      <hr className="mb-6 mt-2"></hr>
      {
         isDiffrent==true?(
          <div className="w-[400px] h-[204px] shadow-xl fixed bottom-8 left-[40%] z-50 bg-white p-5">
                <h2 className="text-xl font-bold">Items already in cart</h2>
                <p className=" font-semibold mt-4">Your cart contains item from other Restaurant 
                  would you like to Reset your cart for other items from this restaurant</p>
                <div className=" flex justify-between py-3">
                  <button onClick={()=>setIsDiffrent()}   className="w-[40%] shadow-md font-bold text-xl px-3 py-1.5 border-1 text-green-400">No</button>
                  <button onClick={()=>handleCart()}   className="w-[50%] shadow-md font-bold text-xl px-3 py-1.5  bg-green-700">Yes Strat Afresh</button>
                </div>
          </div>
         ):null
      }
    </>
  );
}
