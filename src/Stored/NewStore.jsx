import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Stored/CartSlice"
 const newStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default newStore;