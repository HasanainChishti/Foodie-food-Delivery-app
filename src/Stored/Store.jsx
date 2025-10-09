import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlicer";
import tempReducer from "./TempSlicer"
import authReducer from "./authSlicer"
const stores=configureStore({
    reducer:{
        cartSlice:cartReducer,
        tempSlice:tempReducer,
        authSlice:authReducer,
    }
})
export default stores;





// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import createReducer from "./CartSlicer"

// export const store =configureStore({
//     reducer:{
//         cartSlice:createReducer,
        
//     }
// })