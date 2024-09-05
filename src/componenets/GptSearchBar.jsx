import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addgptmovieresult } from "../utils/gptSlice";

const GptSearchBar = () => {
	const langkey = useSelector((store) => store.config.lang);
	const searchtxt = useRef(null);
	const dispatch = useDispatch();

	const searchMovieTMDB = async (movie) => {
		try {
			const data = await fetch(
				"https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
				API_OPTIONS
			);
			const json = await data.json();
			return json.results;
		} catch (error) {
			console.error(`Error fetching data from TMDB for movie: ${movie}`, error);
			return [];
		}
	};

	// const handlegptsearchclick = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		console.log(searchtxt.current.value);

	// 		const query = `Act as a Movie recommendation system and suggest some movies ${searchtxt.current.value}. Only give me names of 5 movies, comma separated like the example given ahead. example result: Gaddar, Sholey, Don, Golmaal, Koi mil gaya.`;

	// 		const gptresult = await openai.chat.completions.create({
	// 			messages: [{ role: "user", content: query }],
	// 			model: "gpt-3.5-turbo",
	// 		});
			

	// 		if (gptresult.choices?.[0]?.message?.content) {
	// 			const gptmovies = gptresult.choices?.[0]?.message?.content.split(",");

	// 			const dataAll = gptmovies.map((movie) => searchMovieTMDB(movie));

	// 			const tmdbresults = await Promise.all(dataAll);

	// 			// console.log(tmdbresults);
				
	// 			dispatch(
	// 				addgptmovieresult({ movieNames: gptmovies, movieResults: tmdbresults })
	// 			);
	// 		} else {
	// 			console.error("GPT result is not in expected format");
	// 		}
	// 	} catch (error) {
	// 		console.error("Error in GPT search click handler", error);
	// 	}
	// };

	const handlegptsearchclick = async (e) => {
		e.preventDefault();
		try {
			console.log(searchtxt.current.value);

			const query = `Act as a Movie recommendation system and suggest some movies ${searchtxt.current.value}. Only give me names of 5 movies, comma separated like the example given ahead. example result: Gaddar, Sholey, Don, Golmaal, Koi mil gaya.`;

			const gptresult = await openai.chat.completions.create({
				messages: [{ role: "user", content: query }],
				model: "gpt-3.5-turbo",
			});

			if (gptresult.choices?.[0]?.message?.content) {
				const gptmovies = gptresult.choices?.[0]?.message?.content.split(",");

				if (gptmovies.length === 0) {
					// Dispatch empty result if no movies were suggested by GPT
					dispatch(addgptmovieresult({ movieNames: [], movieResults: [] }));
				} else {
					const dataAll = gptmovies.map((movie) => searchMovieTMDB(movie));

					const tmdbresults = await Promise.all(dataAll);

					dispatch(
						addgptmovieresult({
							movieNames: gptmovies,
							movieResults: tmdbresults,
						})
					);
				}
			} else {
				console.error("GPT result is not in expected format");
				// Dispatch empty result if no content in GPT response
				dispatch(addgptmovieresult({ movieNames: [], movieResults: [] }));
			}
		} catch (error) {
			console.error("Error in GPT search click handler", error);
			// Dispatch empty result in case of an error
			dispatch(addgptmovieresult({ movieNames: [], movieResults: [] }));
		}
	};


	return (
		<div className="pt-[40%] md:pt-[10%] flex justify-center rounded-sm px-2 md:px-0">
			<form
				className="bg-black p-3 flex gap-2 w-full md:w-1/2 grid grid-cols-12"
				onSubmit={(e) => e.preventDefault()}>
				<input
					ref={searchtxt}
					type="text"
					className="px-4 py-3 text-lg col-span-9"
					placeholder={lang[langkey].gptplaceholder}
				/>
				<button
					className="text-white text-2xl py-1 px-3 rounded col-span-3 bg-red-500"
					onClick={handlegptsearchclick}>
					{lang[langkey].Search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
