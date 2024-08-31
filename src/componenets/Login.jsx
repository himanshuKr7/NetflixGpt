import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validate } from '../utils/Validate';

const Login = () => {
	const [IsSignInForm, setIsSignInForm] = useState(true);
	const [errormessage, setErrormessage] = useState("");
	const email = useRef(null);
	const password = useRef(null);



	const handleclick = () =>
	{
		const Email = email.current.value;
		const Password = password.current.value;
		setErrormessage(Validate(Email, Password));		
	}

    const toggleSignInForm = () =>
    {
        setIsSignInForm(!IsSignInForm);
    }
  return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
					alt="bg"
				/>
			</div>
			<form onSubmit={(e)=>e.preventDefault()} className="absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-85">
				<h1 className="font-bold text-3xl py-4">
					{IsSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{IsSignInForm ? null : (
					<input
						type="text"
						placeholder="Enter Name"
						className="p-2 my-2 w-full rounded bg-gray-800"
					/>
				)}
			  <input
				    ref={email}
					type="text"
					placeholder="Enter Email"
					className="p-2 my-2 w-full rounded bg-gray-800"
				/>
			  <input
				   ref={password}
					type="Password"
					placeholder="Enter Password"
					className="p-2 my-2 w-full rounded bg-gray-800"
			  />
			  <p className=' my-2 text-red-500 text-lg'>{ errormessage}</p>
				<button className="p-3 my-4 bg-[#e50914] w-full rounded font-bold text-xl cursor-pointer" onClick={handleclick}>
					{IsSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="py-4 underline cursor-pointer" onClick={toggleSignInForm}>
					{IsSignInForm?"New to NetflixGpt? Sign Up Now":"Already User? Sign In Now"}
				</p>
			</form>
		</div>
	);
}

export default Login
