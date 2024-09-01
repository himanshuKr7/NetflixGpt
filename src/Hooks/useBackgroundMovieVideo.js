import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useBackgroundMovieVideo = (movieId) => {
	const dispatch = useDispatch();
	const getMoviesVideo = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				movieId +
				"/videos?language=en-US",
			API_OPTIONS
		);
		const json = await data.json();
		console.log(json);

		const filterdata = json.results.filter((video) => video.type === "Trailer");
		const trailer = filterdata.length ? filterdata[0] : json.results[0];
		dispatch(addTrailer(trailer));
	};

	useEffect(() => {
		getMoviesVideo();
	}, []);
};

export default useBackgroundMovieVideo;
