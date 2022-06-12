import React from "react";
import Header from "../../layout/public/Header";
import Footer from "../../layout/public/Footer";


function About() {
    return (
        <React.Fragment>
            <Header/>
            <p>About</p>
            <Footer position="fixed" bottom="0px" />
        </React.Fragment>
    );
}

export default About