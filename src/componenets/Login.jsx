import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND } from "../utils/constant";
import { toast } from "react-toastify";


const Login = () => {
	const [IsSignInForm, setIsSignInForm] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleclick = () => {
		const Email = email.current.value;
		const Password = password.current.value;
		const validationError = Validate(Email, Password);

		if (validationError) {
			toast.error(validationError, {
				position: "top-right",
				autoClose: 2000,
				theme: "colored",
			});
			return;
		}

		setIsLoading(true);

		if (!IsSignInForm) {
			// Sign Up
			createUserWithEmailAndPassword(auth, Email, Password)
				.then(() => {
					updateProfile(auth.currentUser, {
						displayName: name.current.value,
					})
						.then(() => {
							const { uid, email, displayName } = auth.currentUser;
							dispatch(addUser({ uid, email, displayName }));
							toast.success("Signed up successfully!", {
								position: "top-right",
								autoClose: 2000,
								theme: "colored",
							});
							setTimeout(() => {
								setIsLoading(false);
								navigate("/browse");
							}, 2000);
						})
						.catch((error) => {
							setIsLoading(false);
							toast.error(error.message);
						});
				})
				.catch((error) => {
					setIsLoading(false);
					toast.error(error.message);
				});
		} else {
			// Sign In
			signInWithEmailAndPassword(auth, Email, Password)
				.then((userCredential) => {
					dispatch(
						addUser({
							uid: userCredential.user.uid,
							email: userCredential.user.email,
							displayName: userCredential.user.displayName,
						})
					);
					toast.success("Logged in successfully!", {
						position: "top-right",
						autoClose: 2000,
						theme: "colored",
					});
					setTimeout(() => {
						setIsLoading(false);
						navigate("/browse");
					}, 2000);
				})
				.catch((error) => {
					setIsLoading(false);
					toast.error(error.message);
				});
		}
	};

	const toggleSignInForm = () => {
		setIsSignInForm(!IsSignInForm);
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					className="h-screen w-screen object-cover"
					src={BACKGROUND}
					alt="bg"
				/>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute sm:8/12 md:w-4/12 p-12 bg-black my-36  md:mx-auto right-0 left-0 text-white rounded-md bg-opacity-85">
				<h1 className="font-bold text-3xl py-4">
					{IsSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!IsSignInForm && (
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
				<button
					className="p-3 my-4 bg-[#e50914] w-full rounded font-bold text-xl cursor-pointer"
					onClick={handleclick}
					disabled={isLoading}>
					{isLoading ? "Please wait..." : IsSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="py-4 underline cursor-pointer" onClick={toggleSignInForm}>
					{IsSignInForm
						? "New to NetflixGpt? Sign Up Now"
						: "Already User? Sign In Now"}
				</p>
			</form>
			{isLoading && (
				<div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-75">
					<p className="text-blue-500 text-2xl font-bold drop-shadow-lg">
						Directing to Browse Page... Please wait!
					</p>
				</div>
			)}
			<div className="absolute">Enjoy Your Movies🎬🍿</div>
		</div>
	);
};

export default Login;
