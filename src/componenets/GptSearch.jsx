import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import gptbackground from '../assets/gptbg.jpg'
const GptSearch = () => {
  return (
		<div className="">
			<div className="absolute -z-20 w-full">
				<img src={gptbackground} alt="bg"className='w-[100%]'/>
			</div>
			<GptSearchBar />
			<GptMovieSuggestion />
		</div>
	);
}

export default GptSearch
