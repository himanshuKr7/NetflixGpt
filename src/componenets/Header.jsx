import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
  const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
	};

	return (
		<div>
			<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
				<img
					src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
					alt="logo"
					className="w-44"
				/>
        {user && <div className="flex items-center gap-5">
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="user"
            className="w-10 rounded"
          />
          <button
            className="cursor-pointer text-white font-bold p-2 bg-[#e50914] rounded-md"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>}
			</div>
		</div>
	);
};

export default Header;
