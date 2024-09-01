import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowplayingmovies: null,
        trailervideo:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowplayingmovies = action.payload;
        },
        addTrailer: (state, action)=>{
            state.trailervideo = action.payload;
        }
    }
    
});

export const { addNowPlayingMovies,addTrailer} = movieSlice.actions;

export default movieSlice.reducer;