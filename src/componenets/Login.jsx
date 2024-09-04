import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND } from "../utils/constant";

const Login = () => {
	const [IsSignInForm, setIsSignInForm] = useState(true);
	const [errormessage, setErrormessage] = useState("");
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleclick = () => {
		const Email = email.current.value;
		const Password = password.current.value;
		const validationError = Validate(Email, Password);
		setErrormessage(validationError);

		if (validationError) return; 

		if (!IsSignInForm) {
			createUserWithEmailAndPassword(auth, Email, Password)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(auth.currentUser, {
						displayName: name.current.value,
					})
						.then(() => {
							const { uid, email, displayName } = auth.currentUser;
							dispatch(
								addUser({ uid: uid, email: email, displayName: displayName })
							)
						})
						.catch((error) => {
							setErrormessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrormessage(errorCode + "-" + errorMessage);
				});
		} else {
			signInWithEmailAndPassword(auth, Email, Password)
				.then((userCredential) => {
					const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrormessage(errorCode + "-" + errorMessage);
				});
		}
	};

	const toggleSignInForm = () => {
		setIsSignInForm(!IsSignInForm);
	};

	return (
		<div>
			<Header/>
			<div className="absolute">
				<img className="h-screen w-screen object-cover"
					src={BACKGROUND}
					alt="bg"
				/>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute w-full md:w-4/12 p-12 bg-black my-36  md:mx-auto right-0 left-0 text-white rounded-md bg-opacity-85">
				<h1 className="font-bold text-3xl py-4">
					{IsSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{IsSignInForm ? null : (
					<input
						ref={name}
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
				<p className="my-2 text-red-500 text-lg">{errormessage}</p>
				<button
					className="p-3 my-4 bg-[#e50914] w-full rounded font-bold text-xl cursor-pointer"
					onClick={handleclick}>
					{IsSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="py-4 underline cursor-pointer" onClick={toggleSignInForm}>
					{IsSignInForm
						? "New to NetflixGpt? Sign Up Now"
						: "Already User? Sign In Now"}
				</p>
			</form>
		</div>
	);
};

export default Login;
