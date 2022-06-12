import React from "react";
import {FormControl, makeStyles, Paper, TextField} from "@material-ui/core";
import Footer from "../../layout/public/Footer";
import Container from "@material-ui/core/Container";
import FilmCategorySelector from "../../components/FilmCategorySelect";
import SearchBarNew from "../../components/SearchBarNew";
import Header from "../../layout/public/Header";


function Search() {
    const useStyles = makeStyles((theme) => ({
        searchBar: {
            position: 'relative',
            top: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: "70%"
        },
        filterForm: {
            position: 'relative',
            top: '50px',
            left: '14%'
        },
        fromYear: {
            //display: 'inline-block',
            //display: 'flex',
            width: '100px',
        },
        toYear: {
            //display: 'inline-block',
            //display: 'flex',
            width: '100px',
            left: '25px'
        },
        yearsContainer: {
            display: 'flex',
            position: 'relative',
            right: '25px'
        },
        toYearDash: {
            '&::before': {
                content: "'-'",
                fontSize: '100px',
                position: 'absolute',
                top: '0px'
            },
        }
        // fromYearInput: {
        //     display: 'inline-block',
        //     width: '40px',
        // },
        // toYearInput: {
        //     display: 'inline-block',
        //     width: '40px',
        // }
    }));
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header/>
            <SearchBarNew className={classes.searchBar} cancelOnEscape={true}/>
            <FormControl className={classes.filterForm}>
                <p>Film Category</p>
                <FilmCategorySelector id="category-selector"/>
                <p>Years</p>
                <Container className={classes.yearsContainer}>
                    <Paper className={classes.fromYear} elevation={0}>
                        <TextField
                            label="From Year"
                            id="from-year-input"
                            //defaultValue="Small"
                            className={classes.fromYear}
                            variant="outlined"
                            //size="small"
                        />
                    </Paper>
                    <Paper className={`${classes.toYear} ${classes.toYearDash}`} elevation={0}>
                        <TextField
                            label="To Year"
                            id="to-year-input"
                            className={classes.toYear}
                            //defaultValue="Small"
                            variant="outlined"
                            //size="small"
                        />
                    </Paper>
                </Container>
            </FormControl>
            <Footer/>
        </React.Fragment>
    );
}

export default Search