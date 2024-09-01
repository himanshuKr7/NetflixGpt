import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  
  useNowPlayingMovies();

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
