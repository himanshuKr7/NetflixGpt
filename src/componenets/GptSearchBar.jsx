import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
    const langkey = useSelector((store) => store.config.lang);
	return (
		<div className="pt-[10%] flex justify-center rounded-sm">
			<form className="bg-black p-3 flex gap-2 w-1/2 grid grid-cols-12">
				<input
					type="text"
					className="px-4 py-3 text-lg col-span-9"
					placeholder={lang[langkey].gptplaceholder}
				/>
				<button className="text-white text-2xl py-1 px-3 rounded col-span-3  bg-red-500">
					{lang[langkey].Search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
