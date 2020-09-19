import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateAccount.css';
import { makeStyles, TextField } from '@material-ui/core';

import fb from '../../images/Icon/fb.png';
import google from '../../images/Icon/google.png'



const CreateAccount = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            textAlign: 'center',
            width: '400px',
            backgroundColor: 'white',
            marginLeft: "500px",
        },
        btn: {
            borderRadius: '0 !important',

            width: '250px',
            marginLeft: '75px',
            fontSize: '10px'
        },
        fbbtn: {
            borderRadius: '0 !important',
            width: '250px',
            marginLeft: '5px',
            fontSize: '10px',
        },
        googlebtn: {
            borderRadius: '0 !important',
            width: '250px',
            marginLeft: '5px',
            fontSize: '10px',
            backgroundColor: 'white',
            color: 'black'
        }


    }));


    const classes = useStyles();

    return (

        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="First Name" />
            <TextField id="standard-basic" label="Last Name" />

            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Password" />
            <TextField id="standard-basic" label="Confirm Password" />

            <Button className={classes.btn} variant="warning" size="md" block>
                Create an account
            </Button>
            <Button className={classes.btn} variant="warning" size="md" block>
                Already have an account? Login
            </Button>
            <Button className={classes.fbbtn}>
                <Row>
                    <Col md={2}><img style={{ width: '30px' }} src={fb} alt="" /></Col>
                    <Col style={{marginTop:'10px'}} md={8}>Sign In With Facebook </Col>
                </Row>
            </Button>
            <Button className={classes.googlebtn}>
                <Row>
                    <Col md={3}><img style={{ width: '20px' }} src={google} alt="" /></Col>
                    <Col md={6}>Sign In With Google</Col>
                </Row>
            </Button>
        </form>


    );
};

export default CreateAccount;