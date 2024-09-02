import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptsearch:false,
    },
    reducers: {
        toggleGptSearch:(state, action)=>
        {
            state.gptsearch = !state.gptsearch;
        }
    }
})

export const { toggleGptSearch } = gptSlice.actions;

export default gptSlice.reducer;