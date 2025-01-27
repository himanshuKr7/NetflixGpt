import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_GPT_KEY } from "../utils/constant";
import { addgptmovieresult, setLoading } from "../utils/gptSlice"; 
import { GoogleGenerativeAI } from "@google/generative-ai";
import lang from "../utils/languageConstants";

const apiKey = GEMINI_GPT_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const GptSearchBar = () => {
    const langkey = useSelector((store) => store.config.lang);
    const searchtxt = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
                API_OPTIONS
            );
            const json = await response.json();
            return json.results;
        } catch (error) {
            console.error(`Error fetching data from TMDB for movie: ${movie}`, error);
            return [];
        }
    };

    const handlegeminisearchclick = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true)); 
        try {
            const query = `Act as a Movie recommendation system and suggest some movies ${searchtxt.current.value}. Only give me names of 5 movies, comma separated like the example given ahead. example result: Gaddar, Sholey, Don, Golmaal, Koi mil gaya.`;

            const chatSession = model.startChat({
                generationConfig,
                history: [],
            });

            const result = await chatSession.sendMessage(query);

            if (result?.response?.text()) {
                const geminiMovies = result.response
                    .text()
                    .split(",")
                    .map((movie) => movie.trim());

                if (geminiMovies.length === 0) {
                    dispatch(addgptmovieresult({ movieNames: [], movieResults: [] }));
                } else {
                    const dataAll = geminiMovies.map((movie) => searchMovieTMDB(movie));
                    const tmdbResults = await Promise.all(dataAll);

                    dispatch(
                        addgptmovieresult({
                            movieNames: geminiMovies,
                            movieResults: tmdbResults,
                        })
                    );
                }
            } else {
                console.error("Gemini result is not in the expected format");
                dispatch(addgptmovieresult({ movieNames: [], movieResults: [] }));
            }
        } catch (error) {
            console.error("Error in Gemini search click handler", error);
            dispatch(addgptmovieresult({ movieNames: [], movieResults: [] }));
        } finally {
            dispatch(setLoading(false)); 
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
                    className="px-4 py-3 text-lg col-span-9 rounded-md"
                    placeholder={lang[langkey].gptplaceholder || "Search for movies..."}
                />
                <button
                    className="text-white text-2xl py-1 px-3 rounded col-span-3 bg-red-500 hover:bg-red-600"
                    onClick={handlegeminisearchclick}>
                    {lang[langkey].Search || "Search"}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
