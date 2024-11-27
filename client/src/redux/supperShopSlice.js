import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  favourite: [], // Added favourite list
  userInfo: null,
};

export const counterSlice = createSlice({
  name: "suppershop",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incressQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    dececressQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    },
    deteleproduct: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },

    allRemoveProduct: (state) => {
      state.cart = [];
    },

    addFavourite: (state, action) => {
      const existingItem = state.favourite.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.favourite.push(action.payload);
      }
    },
    deteleFavourite: (state, action) => {
      state.favourite = state.favourite.filter(
        (item) => item._id !== action.payload
      );
    },

    // removefavourite: (state) => {
    //   state.favourite = [];
    // },
  },
});

export const {
  addProduct,
  incressQuantity,
  dececressQuantity,
  deteleproduct,
  allRemoveProduct,
  addFavourite,
  deteleFavourite,
} = counterSlice.actions;

export default counterSlice.reducer;
