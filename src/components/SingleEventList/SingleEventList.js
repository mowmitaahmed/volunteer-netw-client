import React from 'react';
import { Button, Col } from 'react-bootstrap';
import ExtraVolunteer from '../../images/image/extraVolunteer.png';

const SingleEventList = (props) => {
    const even = props.ev;
   const handleDel= props.handleDel;

    const deleteEvent = (e, id) => {
      fetch(`https://dry-tundra-50240.herokuapp.com/delete/${id}`,{
          method: 'DELETE',
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      .then(res => res.json())
      .then(result => {
        handleDel ();
      })
    }
    return (
        <Col md={6}>
            <div className="singleEventTask">
                <img className="float-left" src={ExtraVolunteer} alt=""/>
                <div className="singleEventTaskDetails float-left">
                    <h5>{even.event}</h5>
                    <h6>{(new Date(even.date).toDateString('dd/MM/yyyy'))}</h6>
                    <Button onClick={(e)=>deleteEvent(e,even._id)} variant="secondary" className="float-right" type="submit" >Cancel</Button>
                </div>
            </div>
        </Col>
    );
};

export default SingleEventList;