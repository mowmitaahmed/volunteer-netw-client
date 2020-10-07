import React, { useContext } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { selectedEventTasks } from '../../App';
import GoogleLogo from '../../images/logos/google.png';
import './Login.css';

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
    // firebase.initializeApp(firebaseConfig);
    const [user, setUser, selectedEvent, setSelectedEvent] = useContext(selectedEventTasks);
    const history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
     // Google Sign In
const handleSignInGoogle = () => {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(providerGoogle)
    .then( result => {
        const {displayName, photoURL, email} = result.user;
        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true,
            error: ''
        }
        setUser(signedInUser);
        sessionStorage.setItem('isSignedIn', true);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('img', photoURL);
        sessionStorage.setItem('name', displayName);
        history.replace(from);
      }).catch(error => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
}
    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Navbar.Brand href="#home"><Link to="/home"><img src={logo} className="logo" alt="Logo" /></Link></Navbar.Brand>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <Col md={3}></Col>
                <Col md={6} className="text-center">
                    <h3>Login With</h3>
                    <ul className="extraLogin">
                        <li onClick={handleSignInGoogle}><img src={GoogleLogo} alt="google"/>Continue with Google</li>
                    </ul>
                    <p>Don't have an account? <a href="#">Create an Account</a></p>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
};

export default Login;