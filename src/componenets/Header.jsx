import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import NetflixLogo from '../assets/Netflixlogo.png';
import { SUPPORTED_LANGUAGES, USER_LOGO } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { IoSearchSharp } from "react-icons/io5";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const showlang = useSelector((store) => store.gpt.gptsearch);
	
	const dispatch = useDispatch();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
			})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unsubscribe();
	}, []);

	const handleclick = () =>
	{
		dispatch(toggleGptSearch());
	}

	const handlelanguagechange = (e) =>
	{
          dispatch(changeLanguage(e.target.value))
	}

	return (
		<div>
			<div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-col gap-10 md:flex-row  justify-between">
				<img src={NetflixLogo} alt="logo" className="w-44 mx-auto md:mx-0" />
				{user && (
					<div className="flex items-center gap-4 justify-around md:gap-5">
						{showlang ? (
							<>
								<select
									className="p-2 bg-gray-900 text-white opacity-75"
									onChange={handlelanguagechange}>
									{SUPPORTED_LANGUAGES.map((language) => (
										<option
											key={language.identifier}
											value={language.identifier}>
											{language.name}
										</option>
									))}
								</select>
							</>
						) : null}
						<button
							className="py-2 px-2 md:px-5 md:text-xl text-white rounded-md bg-blue-500 cursor-pointer flex items-center gap-3"
							onClick={handleclick}>
							{showlang ? (
								"Homepage"
							) : (
								<>
									GptSearch
									<IoSearchSharp />
								</>
							)}
						</button>
						<img src={USER_LOGO} alt="user" className="w-10 hidden md:block rounded" />
						<button
							className="cursor-pointer text-white md:font-bold p-1 md:p-2 bg-[#e50914] rounded-md"
							onClick={handleSignOut}>
							Sign Out
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
