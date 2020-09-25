import React, { useContext, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateAccount.css';
import { makeStyles, TextField } from '@material-ui/core';

import fb from '../../images/Icon/fb.png';
import google from '../../images/Icon/google.png'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { CategoryContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const CreateAccount = () => {
    const [newUser, setNewUser] = useState(true)
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        conpassword: '',
        error: '',
        success: false
    })

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

    const [loggedInUser, setLoggedInUser] = useContext(CategoryContext)

    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            var { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            //console.log(signedInUser)
            setLoggedInUser(signedInUser)
            history.replace(from)

        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    const fbSignIn = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            var { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            //console.log('fb user',signedInUser)
            setLoggedInUser(signedInUser)
            history.replace(from)

        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    // name, pass... validation
    const handleBlur = (e) => {
        let isFieldValid = true
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber

            //....repeated password set
        }
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value
            setUser(newUserInfo)
        }
        setPassword(e.target.value)

    }

    const handleSubmit = (e) => {
        console.log(user.email, user.password, 'name', user.fname)

        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    history.replace(from)
                    updateUserName(user.fname) // emil,pass succesfull hole updateusername k call korbo
                    console.log(res.user.displayName)

                })
                .catch(error => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    history.replace(from)

                    console.log('sign in user info', res.user)
                    console.log(res.user.displayName)
                })
                .catch(function (error) {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });
        }
        e.preventDefault()
    }

    const updateUserName = fname => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: fname,
        }).then(function () {
            console.log('user name update successfully')
        }).catch(function (error) {
            console.log('error')
        });

    }

    // handling repeated password..
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const changeConfirmPassword = (e) =>{
        console.log('password', password)
        setConfirmPassword(e.target.value)
        console.log(e.target.name, e.target.value)

        console.log(confirmPassword)

        //function ta barire create kore ekne call korte hobe
        if(password !== e.target.value){
            setErrorConfirmPassword('Password not matched')
            setSuccessMessage('')

        }else{
            setSuccessMessage('Password match')
            setErrorConfirmPassword('')
            
        }
    }

    return (

        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <p style={{ color: 'red' }}>{user.error}</p>

            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} successfully</p>}

            {newUser && <TextField name="fname" id="standard-basic" label="First Name" required />}
            {newUser && <TextField name="lname" id="standard-basic" label="Last Name" required />}

            <TextField name="email" onBlur={handleBlur} id="email" label="Email" required />
            <TextField name="password" onBlur={handleBlur} type="password" label="Password" required />
            
            {newUser && <TextField name="conpassword" onBlur={changeConfirmPassword} type="password"  label="Confirm Password" required />}
            {
                errorConfirmPassword && (<p className="text-danger">{errorConfirmPassword}</p>)
            }
            {
                successMessage && (<p className="text-success">{successMessage}</p>)
            }
            

            <Button type="submit" className={classes.btn} variant="warning" size="md" block>
                {newUser ?'Create an Account': 'Log In' }
            </Button>

            <Button onClick={() => setNewUser(!newUser)} className={classes.btn} variant="warning" size="md" block>
                {newUser ? 'Already have a account? Log In': 'Dont have an account? Create an account ' }
            </Button>

            <Button onClick={fbSignIn} className={classes.fbbtn}>
                <Row>
                    <Col md={2}><img style={{ width: '30px' }} src={fb} alt="" /></Col>
                    <Col style={{ marginTop: '10px' }} md={8}>Sign In With Facebook </Col>
                </Row>
            </Button>
            <Button onClick={googleSignIn} className={classes.googlebtn}>
                <Row>
                    <Col md={3}><img style={{ width: '20px' }} src={google} alt="" /></Col>
                    <Col md={6}>Sign In With Google</Col>
                </Row>
            </Button>
        </form>

    );
};

export default CreateAccount;