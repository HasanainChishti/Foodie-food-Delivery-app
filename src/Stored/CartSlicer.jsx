import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const cart = createSlice({
  name: "cartSlice",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartData")) || [],
    restInfo:JSON.parse(localStorage.getItem("restInfo"))||[] ,
    cnt: 0,
  },
  reducers: {
    addItem: (state, action) => {
      // console.log("action",action.payload);
      const {restData,restInfo}=action.payload;
      console.log("restdata&info",restData,restInfo);
      
      // console.log(state.restInfo,"state.restInfo is");
    
     
      state.items.push({ ...restData, quantity: 1 });
      localStorage.setItem("cartData", JSON.stringify(state.items));

      state.restInfo=(restInfo);
      // state.restInfo.push(Rest);
      localStorage.setItem("restInfo", JSON.stringify(state.restInfo));
      state.cnt++;
      localStorage.setItem("cnt", JSON.stringify(state.cnt));
       toast.success("Added Successfully", {
                    style: {
                      fontSize: "20px",
                      fontWeight:"bold"
                    },
                  });
    
    
     
    },
    incrementItem: (state, action) => {
      console.log("yes", state.items);
      // const {Cart,Rest}=action.payload;
      console.log(action.payload);
      const data = state.items.find((item) => item.id == action.payload.id);
      data.quantity++;
      // localStorage.setItem("cartData",JSON.stringify(state.items))
    },
    decrementItem: (state, action) => {
      //  const {Cart,Rest}=action.payload;
      const data = state.items.find((item) => item.id == action.payload.id);
      data.quantity--;

      if (data.quantity === 0) {
        // state.cnt--;
        state.items = state.items.filter( (item) => item.id != action.payload.id);
        //  state.items = [];
      // localStorage.removeItem("cartData");
      // localStorage.removeItem('cnt'),
      // state.restInfo=[];
       localStorage.removeItem("restInfo");
        localStorage.setItem("cnt", JSON.stringify(state.cnt));
      }
      //   localStorage.setItem("cartData",JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartData");
      localStorage.removeItem('cnt'),
      state.restInfo=[];
       localStorage.removeItem("restInfo");
    },
  
    
  },
});
export const { addItem, incrementItem, decrementItem, clearCart } =cart.actions;

export default cart.reducer;

// import {createSlice} from "@reduxjs/toolkit"
// const cart= createSlice({
//     name:"cartSlice",
//     initialState:{
//         items:[],
//         // id:0,
//     },
//     reducers:{
//         addItem:(state,action)=>{
//             // console.log(state.id ,Restid);

//             state.items.push({...action.payload,quantity:1});
//             // state.id=Restid;

//         },
//         IncrementItem:(state,action)=>{

//            const data=state.items.find((obj)=>obj.id===action.payload.id)
//            data.quantity+=1;

//         // state.items.push({...action.payload,quantity:1});
//         },
//         DecrementItem:(state,actionstid)=>{

//          const data=state.items.find((obj)=>obj.id===action.payload.id)
//          if(data.quantity===1)
//             state.items=state.items.filter((obj)=>obj.id!=action.payload.id);
//          else{ const data=state.items.find((obj)=>obj.id===action.payload.id)
//            data.quantity-=1;
//          }

//         }
//     }
// })
// export const  {addItem,IncrementItem,DecrementItem}=cart.actions;
// export default  cart.reducer;
