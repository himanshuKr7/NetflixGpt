import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constant";

const Header = () => {
	const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
  };
  
  useEffect(() => {
		const unsubscribe=onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user.uid;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
			} else {
        dispatch(removeUser());
        navigate("/");
			}
    });
    
    return () => unsubscribe();
	}, []);

	return (
		<div>
			<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
				<img
          src={NETFLIX_LOGO}
					alt="logo"
					className="w-44"
				/>
        {user && <div className="flex items-center gap-5">
          <img
            src={USER_LOGO}
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
