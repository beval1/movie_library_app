import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCuejiT8uonL1DhcIxqrgzRjRaospkIF3E",
    authDomain: "moviedatabase-f1138.firebaseapp.com",
    databaseURL: "https://moviedatabase-f1138-default-rtdb.firebaseio.com",
    projectId: "moviedatabase-f1138",
    storageBucket: "moviedatabase-f1138.appspot.com",
    messagingSenderId: "164520760570",
    appId: "1:164520760570:web:d449b486428744b71b2543",
    measurementId: "G-3D76HQDXCN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
