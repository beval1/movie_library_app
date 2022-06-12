import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Link
} from "react-router-dom";
import firebase from "firebase/app";


function Navbar() {
    const useStyles = makeStyles((theme) => ({
        navBar: {
            position: 'relative',
            marginTop: 0,
            marginBottom: 0,
            backgroundColor: '#282c34',
            height: "5vh",
            display: 'block',
            width: '100vw',
        },
        ulList: {
            margin: '0 0 0 0',
            display: 'inline-block',
            //display: 'flex',
            position: 'absolute',
            listStyleType: 'none',
            width: '50%',
            height: '50%',
            left: '32%',
            top: '18%',
            //backgroundColor: 'red'
        },
        liElem: {
            margin: '0 30px',
            display: 'inline-block',
            "& a": {
                textDecoration: 'none',
                display: 'block',
                fontSize: '21px',
                fontFamily: 'Arial',
                color: 'white',
                fontWeight: 'bold',
            },
            // "& a:hover": {
            //     backgroundColor: 'grey',
            //     color: 'black',
            // },
        },
        login: {
            display: 'incline-block',
            position: 'absolute',
            margin: '0 0',
            padding: '0 0',
            textDecoration: 'none',
            fontSize: '21px',
            fontFamily: 'Arial',
            color: 'white',
            right: '2%',
            top: '18%',
            height: '50%',
            fontWeight: 'bold',
            //backgroundColor: 'green'
        },
        logout: {
            display: 'incline-block',
            position: 'absolute',
            margin: '0 0',
            padding: '0 0',
            textDecoration: 'none',
            fontSize: '21px',
            fontFamily: 'Arial',
            color: 'white',
            right: '2%',
            top: '15%',
            height: '50%',
            fontWeight: 'bold',
            //backgroundColor: 'green'
        },
        logo: {
            display: 'inline-block',
            position: 'absolute',
            fontSize: '28px',
            fontFamily: 'Arial',
            color: 'white',
            textDecoration: 'none',
            left: '25px',
            top: '8%',
            height: '50%',
            //backgroundColor: 'yellow',
        }
        // liHome: {
        //     '&::before': {
        //         content: '"Movie Database"',
        //         fontSize: '30px',
        //         fontFamily: 'Helvetica',
        //         position: 'absolute',
        //         color: 'white',
        //         left: '25px',
        //         top: '12px',
        //     },
        // }
    }));
    const classes = useStyles();


    const logoutUser = () => {
        localStorage.clear();
        firebase.auth().signOut().then(() => {
            console.log('logged out!')
        }).catch((error) => {
            alert(error.message)
        });
        window.location='/'
    }

    const userLocal = localStorage.getItem('user');

    return (
        <nav className={classes.navBar}>
            <Link className={`${classes.logo}`} to="/">MyCinema</Link>
            <ul className={classes.ulList}>
                {/*<li className={`${classes.liElem} ${classes.liHome}`}><a href="/">Home</a></li>*/}
                {/*<li className={classes.liElem}><a href="search">Search</a></li>*/}
                {/*<li className={classes.liElem}><a href="cinemas">Cinemas</a></li>*/}
                {/*<li className={classes.liElem}><a href="login">Login</a></li>*/}
                {/*<li className={classes.liElem}><a href="about">About</a></li>*/}
                <li className={`${classes.liElem} ${classes.liHome}`}><Link to="/">Home</Link></li>
                <li className={`${classes.liElem}`}><Link to="/now-showing">Now Showing</Link></li>
                <li className={`${classes.liElem}`}><Link to="/coming-soon">Coming Soon</Link></li>
                {/*<li className={classes.liElem}><Link to="/search">Search</Link></li>*/}
                <li className={classes.liElem}><Link to="/cinemas">Cinemas</Link></li>
                {/*<li className={classes.liElem}><Link to="/about">About</Link></li>*/}
            </ul>
            {userLocal ? <Link className={`${classes.logout}`} to="" onClick={logoutUser}>Logout</Link>
                : <Link className={`${classes.login}`} to="/login">Login</Link> }
        </nav>
    );
}

export default Navbar