import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showgptsearch=useSelector((store)=>store.gpt.gptsearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  return (
		<div>
			<Header />
			{showgptsearch ? (
				<GptSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
}

export default Browse
