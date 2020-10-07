import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './EventArea.css';
import ChildSupport from '../../images/image/childSupport.png';
import SingleHomeEvents from '../SingleHomeEvents/SingleHomeEvents';
import eventsquery from '../fakeData/events';
import singleEvents from '../singleEvents/singleEvents';

const EventArea = () => {
    const [queryEvent,setQueryEvent] = useState(eventsquery);
    return (
        <Container>
            <Row>
                {
                    queryEvent.map(ev=><SingleHomeEvents ev={ev}></SingleHomeEvents> )
                }
            </Row>
        </Container>
    );
};

export default EventArea;