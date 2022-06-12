import React, {Component} from 'react';
import {TextField} from '@material-ui/core';

// const style = {
//     width: "60%",
//     //height: 50,
//     position: "relative",
//     top: "30px",
// }

class SearchBar extends Component {
    render() {
        return (
            <TextField id="search-field"
                       label="Search Movie Here"
                       variant="outlined"
                        //variant="filled"
                       //size="normal"
                       //style={style}
                //fullWidth
                //autoFocus="true"
                //helperText="test helper"
                //margin="dense"
                // InputLabelProps={{
                //     shrink: true,
                // }}
            />
        );
    }
}

export default SearchBar;