import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>( {

    appBar: {
        position:'relative',
    }





}))




const NavBar = ( ) => {
    const classes=useStyles();
    return(
        <>
            <AppBar position='absolute' color='default'className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" >
                        Electronic shop
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;