import { CssBaseline, makeStyles, Stepper, Step, Typography } from '@material-ui/core';
import React from 'react';
import NavBar from '../../components/organism/AppBar';
import StepLabel from '@material-ui/core/StepLabel';
const useStyles = makeStyles(( theme ) => ({
   
    layout:{
        width:'auto',
        paddingTop:theme.spacing(6),
        width:'auto',
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),  
      },
    stepper:{
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2),
    },




}))

const steps = ['Shipping address', 'Payment details', 'Review your order'];
const CheckOut = ( ) =>{
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    return(
        <>
            <CssBaseline/>
            <NavBar/>
            <main className={classes.layout}>
                <Typography variant ="h4" color="blue" align="center">
                    CheckOut     
                </Typography> 
                <Stepper activeStep={activeStep} className={classes.stepper} >
                {steps.map(( element ) =>( 
                        <Step key={element}>
                            <StepLabel>{element}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Typography variant='h4'>
                    Shipping address
                </Typography>
                

            </main>


        </>

    )


} 

export default CheckOut;
