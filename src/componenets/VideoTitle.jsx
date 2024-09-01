import React from 'react';
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({title,overview}) => {
  return (
		<div className="w-screen aspect-video pt-60 px-12 absolute bg-gradient-to-r from-black">
			<h1 className="font-bold text-white text-3xl">{title}</h1>
			<p className="py-6 text-lg text-white w-2/4">{overview}</p>
			<div className='flex gap-4'>
				<button className="bg-white text-black py-2 px-8 text-xl  rounded flex items-center gap-2 hover:bg-opacity-70 ">
					<FaPlay />
					Play
				</button>
				<button className=' bg-gray-400 text-white py-2 px-8 text-xl rounded'>More Info</button>
			</div>
		</div>
	);
}

export default VideoTitle
