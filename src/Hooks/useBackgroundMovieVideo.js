import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useBackgroundMovieVideo = (movieId) => {
	const dispatch = useDispatch();
	const trailervideo=useSelector((store)=>store.movies.trailervideo)
	const getMoviesVideo = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
        );

        if (!response.ok) {
            throw new Error("Failed to fetch trailer videos");
        }

        const json = await response.json();

        if (json && json.results) {
            const filterdata = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterdata.length ? filterdata[0] : json.results[0];
            dispatch(addTrailer(trailer));
        } else {
            console.error("No results found in the response");
        }
    } catch (error) {
        console.error("Error fetching trailer videos: ", error);
    }
};

useEffect(() => {
    if (!trailervideo) getMoviesVideo();
}, [trailervideo]);


	useEffect(() => {
		getMoviesVideo();
	}, []);
};

export default useBackgroundMovieVideo;
