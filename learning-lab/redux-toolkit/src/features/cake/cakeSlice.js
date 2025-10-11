// import { BUY_CAKE } from "./cakeTypes";

import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   numOfCakes: 10,
// };

// export default function cakeReducer(state = initialState, action) {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - action.payload,
//       };

//     default:
//       return state;
//   }
// }

const cakeSlice = createSlice({
  name: "cake",
  initialState: { numOfCakes: 10 },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    buyCake: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
      //? immerjs => allow us to mutate state !!!
    },
  },
});

//? Action creators are generated for each case reducer function

export const { buyCake } = cakeSlice.actions;
export default cakeSlice.reducer;
