import { createSlice } from "@reduxjs/toolkit";
const auth=createSlice({
    name:"authSlice",
    initialState:{
       userData:JSON.parse(localStorage.getItem('userData'))||null,
    },
    reducers:{
        addUser:(state,action)=>{
            state.userData=action.payload;
            console.log("in slixe",state.userData);
            
       localStorage.setItem('userData',JSON.stringify(state.userData));
        },
        removeUser:(state)=>{
            state.userData=null;
          localStorage.removeItem('userData');
        }
    }
})
export const {addUser,removeUser}=auth.actions;
export default auth.reducer;