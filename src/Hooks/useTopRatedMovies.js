import { API_OPTIONS } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import { addTopRatedMovies} from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
	const dispatch = useDispatch();
	const toprated=useSelector((store)=>store.movies.topratedmovies)
	const topratedmovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/top_rated?page=1",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addTopRatedMovies(json.results));
	};

	useEffect(() => {
		if(!toprated)topratedmovies();
	}, []);
};

export default useTopRatedMovies;
