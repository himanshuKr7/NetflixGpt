import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import gptbackground from '../assets/gptbg.jpg'
const GptSearch = () => {
	return (
		<>
			<div className="-z-20  fixed">
				<img src={gptbackground} alt="bg" className="  w-screen h-screen object-cover" />
			</div>
			<div className="">
				<GptSearchBar />
				<GptMovieSuggestion />
			</div>
		</>
	);
}

export default GptSearch
