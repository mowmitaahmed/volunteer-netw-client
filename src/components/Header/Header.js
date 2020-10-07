import React, { useContext } from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import '../Header/Header.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { selectedEventTasks } from '../../App';

const Header = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
     const [user, setUser, selectedEvent, setSelectedEvent] = useContext(selectedEventTasks);
     const info = sessionStorage.getItem('isSignedIn');
     const infoImg = sessionStorage.getItem('img');
     const infoName = sessionStorage.getItem('name');
         // Sign Out Function
    const handleSignOut = () => {
        firebase.auth().signOut().then(function() {
            const signOutUser = {
              isSignedIn: false,
              email: '',
              name: '',
              photo: ''
            }

            setUser(signOutUser);
            sessionStorage.removeItem('isSignedIn');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('img');
          }).catch(function(error) {
          });
    }
    return (
        <Container>
            <Row>
                <Col md={12} lg={12} >
                    <Navbar collapseOnSelect expand="lg" variant="light" className="my-2">
                        <Navbar.Brand href="#home"><Link to="/home"><img src={logo} className="logo" alt="Logo" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link href="#donation">Donation</Nav.Link>
                                <Nav.Link href="#events"><Link to="/vreg">Events</Link></Nav.Link>
                                <Nav.Link href="#blog">Blog</Nav.Link>
                        {
                            info && <Nav.Link href="#" style={{fontWeight: '700'}}><Link to="/eventtasks">{infoName}</Link></Nav.Link>
                        }
                        {
                            info && <Nav.Link href="#"> {infoImg && <img src={infoImg} style={{width: '40px', height: '40px', borderRadius: '50%'}}/>} </Nav.Link>
                        }
                            </Nav>
                            <Nav>
                        {
                            info ? <Link to="/login"><Button onClick={handleSignOut} variant="primary" className="loginButton ml-3">Log Out</Button></Link> : <Link to="/login"><Button variant="primary" className="loginButton ml-5">Login</Button></Link>
                            
                        }
                        {
                            user.isSignedIn ? ' ' : <Link to="/admin"><Button variant="secondary" className="ml-2">Admin</Button></Link>
                        }
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;