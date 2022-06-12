import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SearchBarNew from "../../../components/SearchBarNew";
import {Button, FormControl, TextField} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import FilmCategorySelector from "../../../components/FilmCategorySelect";
import Paper from "@material-ui/core/Paper";
import DialogActions from "@material-ui/core/DialogActions";

// class Home extends Component {
// constructor(props) {
//     super(props);
//
//     this.state = {
//         filterModalOpened: false
//     }
//
//     this.filterDialog = this.filterDialog.bind(this)
//     //this.useStyles = this.useStyles.bind(this)
// }

// const filterDialog = () =>
// {
//     //this.setState(prev => ({filterModalOpened: !prev.filterModalOpened}))
//     this.setState({filterModalOpened: !this.state.filterModalOpened})
//     console.log(this.state.filterModalOpened)
// }

function HomePage() {

    const [open, setOpen] = React.useState(false);

    const openFilterDialog = () => {
        setOpen(true);
    }
    const closeFilterDialog = () => {
        setOpen(false);
    }

    const useStyles = makeStyles((theme) => ({
        searchButton: {
            top: "10%",
            height: 55,
            //backgroundColor: "green"
            //background: 'green'
        },
        filterButton: {
            top: "5%",
            height: 50,
            left: "71%",
            position: "absolute",
            //backgroundColor: "blue"
        },
        searchBarPaper: {
            display: "flex",
            justifyContent: "space-between",
        },
        searchBar: {
            width: "60%",
            //height: 50,
            position: "relative",
            top: "30px",
        },
        searchBarNew: {
            width: "50%",
            //height: 50,
            position: "absolute",
            top: "5%",
            left: "20%"
        },
        fromYearInput: {
            width: "50%"
        },
        toYearInput: {
            right: "17%"
        },
    }));
    const classes = useStyles();

    return (
        <div className="App">
            {/*<Paper className={classes.searchBarPaper}>*/}
            {/*    <SearchBar className={classes.searchBar} />*/}
            {/*</Paper>*/}

            <SearchBarNew cancelOnEscape={true} className={classes.searchBarNew}/>
            <Button onClick={openFilterDialog} variant="contained" color="primary"
                    className={classes.filterButton}>Filter</Button>

            {/*<AlertDialog openDialog={this.state.filterModalOpened}/>*/}
            {/*<Button variant="contained" color="primary" className={*/}
            {/*    classes*/}
            {/*        .searchButton*/}
            {/*}*/}

            {/*>Search</Button>*/}

            <div>
                <Dialog
                    open={open}
                    onClose={closeFilterDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth={"sm"}
                    fullWidth={true}
                >
                    <DialogTitle id="alert-dialog-title">{"Filter your results"}</DialogTitle>
                    <DialogContent>
                        {/*<DialogContentText id="alert-dialog-description">*/}
                        {/*    Let Google help apps determine location. This means sending anonymous location data to*/}
                        {/*    Google, even when no apps are running.*/}
                        {/*</DialogContentText>*/}
                        <FormControl>
                            {/*<InputLabel htmlFor="my-input">Email address</InputLabel>*/}
                            {/*<Input id="my-input" aria-describedby="my-helper-text" />*/}
                            {/*<InputLabel htmlFor="category-selector">Film Category</InputLabel>*/}
                            <p>Film Category</p>
                            <FilmCategorySelector id="category-selector"/>
                            {/*<br></br>*/}
                            <p>Years</p>
                            <Paper className={classes.searchBarPaper} elevation={0}>
                                <TextField
                                    label="From Year"
                                    id="from-year-input"
                                    //defaultValue="Small"
                                    variant="outlined"
                                    size="small"
                                />
                                {/*<RemoveIcon/>*/}
                                <TextField
                                    label="To Year"
                                    id="to-year-input"
                                    className={classes.toYearInput}
                                    //defaultValue="Small"
                                    variant="outlined"
                                    size="small"
                                />
                            </Paper>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeFilterDialog} color="primary">
                            Filter
                        </Button>
                        <Button onClick={closeFilterDialog} color="primary" autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>


        </div>
    );
}

export default HomePage;