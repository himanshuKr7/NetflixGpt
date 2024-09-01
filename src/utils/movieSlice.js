import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movies",
	initialState: {
		nowplayingmovies: null,
		popularmovies: null,
		topratedmovies: null,
		upcomingmovies: null,
		trailervideo: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowplayingmovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularmovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topratedmovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingmovies = action.payload;
		},
		addTrailer: (state, action) => {
			state.trailervideo = action.payload;
		},
	},
});

export const { addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;