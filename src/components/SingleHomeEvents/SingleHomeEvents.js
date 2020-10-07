import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { selectedEventTasks } from '../../App';
import ChildSupport from '../../images/image/childSupport.png';

const SingleHomeEvents = (props) => {
    const history = useHistory();
    const [user, setUser, selectedEvent, setSelectedEvent,eventList, setEventList] = useContext(selectedEventTasks);
    const {title, img} = props.ev; // Selected place handle
    const handleSelectPlace = () => {
            const selectedPlaceNow = {
                name: title
            }
            setSelectedEvent(selectedPlaceNow);
            console.log('Selected:',selectedEvent);
                history.push('/vreg');
        }
    return (
        <Col md={3} onClick={handleSelectPlace} style={{'cursor':'pointer'}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleHomeEvents;