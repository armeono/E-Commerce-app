import { createSlice } from "@reduxjs/toolkit";


const IDSlice = createSlice({
  name: "id",
  initialState: {
    uniqueID: null,
  },
  reducers: {
    setID: (state, { payload }) => {
      state.uniqueID = payload;
    },
  },
});

export const {setID} = IDSlice.actions;

export default IDSlice.reducer;


