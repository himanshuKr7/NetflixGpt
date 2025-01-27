import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList"; 

const GptMovieSuggestion = () => {
	const gpt = useSelector((store) => store.gpt);
	const { movieNames, movieResults, isLoading } = gpt;

	return (
		<div className="p-4 m-4 bg-black text-white bg-opacity-90 rounded-lg shadow-lg">
			{isLoading ? (
				<div className="flex flex-col items-center justify-center min-h-[300px]">
					<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-opacity-80"></div>
					<p className="mt-4 text-xl font-semibold text-gray-300">
						Searching for Movies...
					</p>
				</div>
			) : movieNames && movieNames.length > 0 ? (
				movieNames.map((name, index) => (
					<MovieList title={name} key={name} movies={movieResults[index]} />
				))
			):(<div></div>)}
		</div>
	);
};

export default GptMovieSuggestion;
