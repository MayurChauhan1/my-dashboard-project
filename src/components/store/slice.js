import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "example",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = slice.actions;
export default slice.reducer;
