// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDsGls2jt754d-1dcSS3FXus6t079VFgwo",
	authDomain: "netflix-gpt-88902.firebaseapp.com",
	projectId: "netflix-gpt-88902",
	storageBucket: "netflix-gpt-88902.appspot.com",
	messagingSenderId: "892862162355",
	appId: "1:892862162355:web:525edb097bb6dd9592d7c6",
	measurementId: "G-E3WX9G8MK1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
