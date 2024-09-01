import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
		<div className=" bg-black">
			<div className="-mt-52 relative z-10">
				<MovieList title={"NowPlaying"} movies={movies.nowplayingmovies} />
				<MovieList title={"Top Rated"} movies={movies.topratedmovies} />
				<MovieList title={"Popular"} movies={movies.popularmovies} />
				<MovieList title={"Upcoming"} movies={movies.upcomingmovies} />
			</div>
		</div>
	);
}

export default SecondaryContainer
