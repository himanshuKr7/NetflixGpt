import { API_OPTIONS } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();

	const nowPlayingmovies=useSelector(store=>store.movies.nowplayingmovies);

	const nowplayingmovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};

	useEffect(() => {
		if(!nowPlayingmovies)nowplayingmovies();
	}, []);
};

export default useNowPlayingMovies;
