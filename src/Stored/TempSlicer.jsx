import { createSlice } from "@reduxjs/toolkit";

const temp = createSlice({
  name: "tempSlice",
  initialState: {
    status: 0,
    location:"",
  },
  reducers: {
    setT: (state) => {
      state.status = 1;
    },
    setF: (state) => {
      state.status = 0;
    },
    setLocation:(state,action)=>{
         state.location=action.payload;
    }
  },
});
export const { setT, setF ,setLocation} = temp.actions;
export default temp.reducer;
