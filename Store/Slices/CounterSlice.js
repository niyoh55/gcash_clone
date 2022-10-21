import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    addOne: (state, action) => {
      state.counter += 1;
    },
  },
});

export const { addOne } = counterSlice.actions;
export default counterSlice.reducer;
