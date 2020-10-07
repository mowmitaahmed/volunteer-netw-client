import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const SingleVolunteerRegisterTable = (props) => {
    const evL = props.evL;
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
        <tr>
            <td>{evL.name}</td>
            <td>{evL.email}</td>
            <td>{evL.date}</td>
            <td>{evL.event}</td>
            <td><Button onClick={(e)=>deleteEvent(e,evL._id)} variant="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button></td>
        </tr>
    );
};

export default SingleVolunteerRegisterTable;