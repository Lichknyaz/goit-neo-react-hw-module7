import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const selectNameFilter = (state) => state.filter.name;

export const { setFilter } = slice.actions;

export default slice.reducer;
