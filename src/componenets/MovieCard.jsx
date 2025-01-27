import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath, title }) => {
 
  if (!posterPath) return null;
  const handleCardClick = () => {
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(title)}+trailer`;
    window.open(youtubeSearchUrl, '_blank'); 
  };

  return (
    <div 
      className="w-36 md:w-44 pr-4 cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={handleCardClick}
      title={`Watch ${title} Trailer on YouTube`}
    >
      <img 
        src={IMG_CDN_URL + posterPath} 
        alt={title} 
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default MovieCard;
