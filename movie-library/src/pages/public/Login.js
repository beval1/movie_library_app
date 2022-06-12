import React from "react";
import Header from "../../layout/public/Header";
import LoginForm from "../../components/LoginForm";
import Footer from "../../layout/public/Footer";


function Login() {
    return (
        <React.Fragment>
            <Header/>
            <LoginForm/>
            <Footer position="fixed" bottom="0px" />
        </React.Fragment>
    );
}

export default Login