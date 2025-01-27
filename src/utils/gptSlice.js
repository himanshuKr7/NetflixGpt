import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptsearch: false,
        movieResults: null,
        movieNames: null,
        isLoading: false, 
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.gptsearch = !state.gptsearch;
        },
        addgptmovieresult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload; 
        }
    }
});

export const { toggleGptSearch, addgptmovieresult, setLoading } = gptSlice.actions;

export default gptSlice.reducer;
