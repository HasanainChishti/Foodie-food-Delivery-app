import { createSlice } from "@reduxjs/toolkit";

const newCartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    cnt: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("PAYLOAD:", action.payload);
      console.log("BEFORE:", [...state.items]);

      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }

      console.log("AFTER:", [...state.items]);
    },
    //     addToCart: (state, action) => {
    //   const item = action.payload;

    //   const existingItem = state.items.find(
    //     (cartItem) => cartItem.id === item.id
    //   );

    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     state.items.push({
    //       ...item,
    //       quantity: 1,
    //     });
    //   }

    //   console.log("CART AFTER ADD:", [...state.items]);
    // },
    // addToCart: (state, action) => {
    //   const item = action.payload;
    //   console.log("in card add to func",action.payload);

    //   const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
    //   if (!existingItem) {
    //     state.items.push({ ...item, quantity: 1 });
    //   } else {
    //     existingItem.quantity += 1;
    //   }
    // },

    // increaseQuantity: (state,action) => {
    //     console.log(action.payload,state.items);

    // const item = state.items.find((cartItem)=> Number(cartItem.id) === Number(action.payload));
    // console.log(item);
    // if(item)
    //   item.quantity++;
    // },
    //    addToCart: (state, action) => {
    //   const item = action.payload;

    //   const existingItem = state.items.find(
    //     (cartItem) => cartItem.id === item.id
    //   );

    //   if (existingItem) {
    //     console.log("yes");

    //     existingItem.quantity += 1;
    //   } else {
    //     state.items.push({
    //       ...item,
    //       quantity: 1,
    //     });
    //   }
    // },
    increaseQuantity: (state, action) => {
      // console.log("PAYLOAD:", action.payload);
      // console.log("ITEMS:", [...state.items]);

      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload,
      );

      // console.log("FOUND ITEM:", item);

      if (item) {
        item.quantity += 1;
      }
    },
    // increaseQuantity: (state, action) => {

    // //    console.log(JSON.parse(JSON.stringify(state.items)));
    //     // console.log(action);
    //     console.log(typeof action.payload);
    // console.log(typeof state.items[0]?.id);
    //   const item = state.items.find(
    //     (cartItem) =>  cartItem.id === action.payload);
    //   console.log(item);
    //     // console.log("found item:", item);

    //   if (item) {
    //     item.quantity += 1;
    //   }
    // },
    removeFromCart: (state, action) => {
          state.items = state.items.filter((cartItem)=> cartItem.id !== action.payload);
          
    },
    decreaseQuantity: (state, action) => {
      let item = state.items.find((cartitem) => cartitem.id === action.payload );
      // state.items = newData;
          item.quantity--;
    },

    clearCart: () => {

    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = newCartSlice.actions;
export default newCartSlice.reducer;
// const item = state.items.find(
//         (item) => item.id === action.payload
//       );

//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }