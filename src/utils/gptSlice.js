import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptsearch: false,
        movieResults: null,
        movieNames:null,
    },
    reducers: {
        toggleGptSearch:(state, action)=>
        {
            state.gptsearch = !state.gptsearch;
        },
        addgptmovieresult: (state, action) =>
        {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const { toggleGptSearch ,addgptmovieresult} = gptSlice.actions;

export default gptSlice.reducer;