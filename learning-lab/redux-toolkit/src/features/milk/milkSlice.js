import { createSlice } from "@reduxjs/toolkit";

const milkSlice = createSlice({
  name: "milk",
  initialState: { numOfMilks: 10 },
  reducers: {
    buyMilk: (state, action) => {
      state.numOfMilks = state.numOfMilks - action.payload;
    },
  },
});

export const { buyMilk } = milkSlice.actions;
export default milkSlice.reducer;
