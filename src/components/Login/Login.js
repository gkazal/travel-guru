import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import fb from '../../images/Icon/fb.png';
import google from '../../images/Icon/google.png'


const Login = () => {

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
            <br/>
            <h4>Login</h4>

            
            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Password" />

            <Button className={classes.btn} variant="warning" size="md" block>
                Login
            </Button>
            <Button className={classes.btn} variant="warning" size="md" block>
                Don't have an account? Create an account
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

export default Login;