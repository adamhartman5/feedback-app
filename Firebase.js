// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCNQh7bN9bYM4oOrGrOklv3LaAY3-N4L4E',
	authDomain: 'feedback-app-244b5.firebaseapp.com',
	projectId: 'feedback-app-244b5',
	storageBucket: 'feedback-app-244b5.appspot.com',
	messagingSenderId: '953657760579',
	appId: '1:953657760579:web:1cd3a72f99900122aa6df6',
	measurementId: 'G-XMGKD07E6B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
