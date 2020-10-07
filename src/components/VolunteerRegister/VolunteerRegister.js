import React, { useContext } from 'react';
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './VolunteerRegister.css';
import logo from '../../images/logos/Group 1329.png';
import { selectedEventTasks } from '../../App';
import { useForm } from 'react-hook-form';

const VolunteerRegister = () => {
    const history = useHistory();
    const [user, setUser, selectedEvent, setSelectedEvent,eventList, setEventList,regData, setRegData] = useContext(selectedEventTasks);
    console.log('name:',selectedEvent.name);
    const nameE = selectedEvent.name;
    // React Hook Form
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        const bookingData ={
            ...data
        }
        // setRegData(bookingData);
        fetch("https://dry-tundra-50240.herokuapp.com/volunteerRegistration",{
            method: "POST",
            mode:"cors",
            headers: {"Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify(bookingData)
        })
        .then(res => res.json())
        .then(data => {
            data && history.push("/eventtasks");
            console.log('Data', data);
        })
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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicName">
                            <Form.Control name="name" type="text" placeholder="Full Name" ref={register({required:true})} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control name="email" type="email" placeholder="Username or Email" ref={register({required:true})} />
                        </Form.Group>
                        <Form.Group controlId="formBasicDate">
                            <Form.Control name="date" type="date" placeholder="Date"  ref={register({required:true})} />
                        </Form.Group>
                        <Form.Group controlId="formBasicDesc">
                            <Form.Control name="description" as="textarea" rows="3" placeholder="Description"  ref={register({required:true})} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Control name="event" as="select" defaultValue={nameE} ref={register({required:true})}>
                                <option value="child Support">child Support</option>
                                <option value="Organize books at the library.">Organize books at the library.</option>
                                <option value="Refuge shelter">Refuge shelter</option>
                                <option value="2">4</option>
                                <option value="2">5</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">Registration</Button>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
};

export default VolunteerRegister;