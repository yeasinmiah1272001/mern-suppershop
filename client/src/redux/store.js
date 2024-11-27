import { configureStore } from "@reduxjs/toolkit";

import suuppershopReducer from "./supperShopSlice";

export const store = configureStore({
  reducer: {
    name: suuppershopReducer,
  },
});
