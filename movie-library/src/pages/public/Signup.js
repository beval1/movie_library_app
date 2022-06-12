import React from "react";
import Header from "../../layout/public/Header";
import Footer from "../../layout/public/Footer";
import SignupForm from '../../components/SignupForm.js'

function Signup() {
    return (
        <React.Fragment>
            <Header/>
            <SignupForm/>
            <Footer position="fixed" bottom="0px" />
        </React.Fragment>
    );
}

export default Signup