import React, { useContext, useEffect, useState } from 'react';
import { selectedEventTasks } from '../../App';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import AdminEventHeader from '../AdminEventHeader/AdminEventHeader';
import './AdminEvent.css';;

const AdminEvent = () => {
    const history = useHistory();
    const [createdEvent, setCreatedEvent] = useState([]);
    useEffect(()=> {
        fetch('https://dry-tundra-50240.herokuapp.com/eventHomeList')
        .then(res => res.json())
        .then(events => setCreatedEvent(events))
        console.log('Events:', createdEvent);
    },[])
    const [user, setUser, selectedEvent, setSelectedEvent,eventList, setEventList,regData, setRegData] = useContext(selectedEventTasks);
    // React Hook Form
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log('Data:', data);
        const bookingData ={
            ...data
        }
        // setEventList(bookingData);
        fetch("https://dry-tundra-50240.herokuapp.com/adminEventCreate",{
            method: "POST",
            mode:"cors",
            headers: {"Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            data && history.push("/adminevent");
        })
    }
    return (
        <Container>
            <AdminEventHeader></AdminEventHeader>
            <Row>
                <Col md={3}>
                    <ul>
                        <li><Link to="/admin">Volunteer register list</Link></li>
                        <li style={{color:'#207FEE'}}><Link to="/adminevent">Add event</Link></li>
                    </ul>
                </Col>
                <Col md={9}>
                    <Form onSubmit={handleSubmit(onSubmit)}  enctype="multipart/form-data">
                        <Row>
                            <Col>
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control name="title" type="text" placeholder="Enter Title"  ref={register({required:true})} />
                            </Col>
                            <Col>
                                <Form.Label>Event Date</Form.Label>
                                <Form.Control name="date" type="date" placeholder="Event Date"  ref={register({required:true})} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" as="textarea" placeholder="Description"  ref={register({required:true})} />
                            </Col>
                            <Col>
                                <Form.File>
                                    <Form.File.Label data-browse="Button text">Banner</Form.File.Label>
                                    <Form.File.Input name="img"  ref={register} />
                                </Form.File>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                    <br/>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Event Title</th>
                        <th>Event Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                              createdEvent.map(crv => <tr><td>{crv.title}</td><td>{crv.date}</td></tr>)  
                            }
                        
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminEvent;