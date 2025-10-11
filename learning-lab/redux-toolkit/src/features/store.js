import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeSlice";
import milkReducer from "./milk/milkSlice";
import usersReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    milk: milkReducer,
    user: usersReducer,
  },
});

export default store;
