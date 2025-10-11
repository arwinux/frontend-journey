import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const getAsyncUsers = createAsyncThunk(
  "user/getAsyncUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUsers.pending, (state) => {
        //^ PENDING
        state.loading = true;
        state.data = [];
        state.error = "";
      })
      .addCase(getAsyncUsers.fulfilled, (state, action) => {
        //* SUCCESS => FULLFILES
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(getAsyncUsers.rejected, (state, action) => {
        //! REJECTED
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default userSlice.reducer;
