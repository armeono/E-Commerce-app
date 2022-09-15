import { createSlice } from "@reduxjs/toolkit";
import { opendirSync } from "fs";
import { Action } from "rxjs/internal/scheduler/Action";

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


