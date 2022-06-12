import React from "react";

import firebase from "firebase/app";
import Header from "../../layout/public/Header";
import Footer from "../../layout/public/Footer";
import DemoCarousel from "../../components/DemoCarousel";


function Home() {
    const user = firebase.auth().currentUser;
    return (
        <React.Fragment>
            <Header/>
            {/*<p>{user ? 'Hello, ' + user.displayName : 'Home'}</p>*/}
            <DemoCarousel />
            <Footer/>
        </React.Fragment>
    );
}

export default Home