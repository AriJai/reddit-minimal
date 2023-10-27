import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
    name: "header",
    initialState: "",
    reducers: {
        setSearchTerm: (state, action) => ( state = action.payload)
    },
});

export const { setSearchTerm } = headerSlice.actions;

export const selectSearchTerm = (state) => state.header;

export default headerSlice.reducer;