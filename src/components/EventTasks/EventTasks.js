import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import ExtraVolunteer from '../../images/image/extraVolunteer.png';
import './EventTasks.css';
import { selectedEventTasks } from '../../App';
import SingleEventList from '../SingleEventList/SingleEventList';

const EventTasks = () => {
    const [user, setUser, selectedEvent, setSelectedEvent,eventList, setEventList] = useContext(selectedEventTasks);
    const infoEmail = sessionStorage.getItem('email');
    const [del, setDel] = useState(false);
    useEffect(()=>{
       fetch('https://dry-tundra-50240.herokuapp.com/events?email='+infoEmail)
       .then(res => res.json())
       .then(events => setEventList(events))
    },[del])

    const handleDel = () => {
        setDel(!del);
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    {
                        eventList.map(ev => <SingleEventList ev={ev} handleDel={handleDel}></SingleEventList>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default EventTasks;