import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';
import './AdminHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { selectedEventTasks } from '../../App';
import SingleVolunteerRegisterTable from '../SingleVolunteerRegisterTable/SingleVolunteerRegisterTable';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    const [user, setUser, selectedEvent, setSelectedEvent,eventList, setEventList] = useContext(selectedEventTasks);
    const [del, setDel] = useState(false);
    useEffect(()=>{
        fetch('https://dry-tundra-50240.herokuapp.com/eventList',{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
       .then(res => res.json())
       .then(data => setEventList(data))
    },[del])

    const handleDel = () => {
        setDel(!del);
    }
    return (
        <Container>
            <AdminHeader></AdminHeader>
            <Row>
                <Col md={3}>
                    <ul>
                        <li style={{color:'#207FEE'}}><Link to="/admin">Volunteer register list</Link></li>
                        <li><Link to="/adminevent">Add event</Link></li>
                    </ul>
                </Col>
                <Col md={9}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Registating date</th>
                                <th>Volunteer list</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                eventList.map(evL => <SingleVolunteerRegisterTable evL={evL} handleDel={handleDel}></SingleVolunteerRegisterTable>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminHome;