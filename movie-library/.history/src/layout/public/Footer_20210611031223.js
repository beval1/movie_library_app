import React from "react";
import {makeStyles} from "@material-ui/core/styles";

function Footer(props) {
    const useStyles = makeStyles((theme) => ({
        footer: {
            padding: '1vh',
            backgroundColor: '#282c34',
            //backgroundColor: 'black',
            //backgroundColor: 'rgba(150,0,0,0.2)',
            //top: '1100px',
            bottom: props.bottom,
            //margin: '100px 0',
            width: '100vw',
            position: props.position,
            display: 'block',
        },
        paragraph: {
            color: 'white'
        }
    }));
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <p className={classes.paragraph}> © 2021 B. Valkov.  All rights reserved.</p>
        </footer>
    );
}

Footer.defaultProps = {
    position: 'relative',
    bottom: '-1100px'
}

export default Footer