import React from "react";
import Header from "../../layout/public/Header";
import Footer from "../../layout/public/Footer";


function Cinemas() {
    return (
        <React.Fragment>
            <Header/>
            <p>Cinemas</p>
            <Footer position="fixed" bottom="0px" />
        </React.Fragment>
    );
}

export default Cinemas