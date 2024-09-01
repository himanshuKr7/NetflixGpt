import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';


const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
      {/* {
        MainContainer
          -videoBackground
          -videoTitle

        Secondary container
         -movielist*n
          -cards*n
      }
       */}
    </div>
  )
}

export default Browse
