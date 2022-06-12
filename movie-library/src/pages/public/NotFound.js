import React from "react";

import {useLocation} from "react-router";
import {makeStyles} from "@material-ui/core/styles";
import Header from "../../layout/public/Header";
import Footer from "../../layout/public/Footer";

function NotFound() {
    const useStyles = makeStyles((theme) => ({
        h1: {
            //position: 'absolute',
            display: 'block',
            //top: '40%',
            color: 'red',
            textAlign: 'center'
        },
        h2: {
            //position: 'relative',
            display: 'block',
            //top: '40%',
            color: 'red',
            textAlign: 'center'
        }
    }));
    const classes = useStyles();

    let location = useLocation();

    //document.getElementsByTagName('body').style.backgroundColor = 'grey';

    return (
        <React.Fragment>
            <Header/>
            <h1 className={classes.h1}>NOT FOUND - 404</h1>
            <h2 className={classes.h2}>
                The requested page at <code>{location.pathname}</code> could not be found :(
            </h2>
            <Footer position="fixed" bottom="0px" />
        </React.Fragment>
    );
}

export default NotFound