import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
	const gpt = useSelector((store) => store.gpt);
	const { movieNames, movieResults } = gpt;
	if (!movieNames) return null;
	return (
		<div className="p-4 m-4 bg-black text-white bg-opacity-90">
			{movieNames && movieNames.length > 0 ? (
				movieNames.map((name, index) => (
					<MovieList title={name} key={name} movies={movieResults[index]} />
				))
			) : (
				<div className="flex justify-center items-center w-screen">
					<h1 className="text-center text-xl">
						Sorry for inconvenience but this is a paid service by OpenAI,Therefore Inactive Now!
					</h1>
				</div>
			)}
		</div>
	);
};

export default GptMovieSuggestion;
