import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import './AdminHeader.css';

const AdminHeader = () => {
    return (
        <Row className="my-3">
            <Col md={3}>
            <Link to="/"><img src={logo} alt="Volunteer Network" className="logo"/></Link>
            </Col>
            <Col md={9}>
                <h5 className="text-left headerTitle my-3">Volunteer Register List</h5>
            </Col>
        </Row>
    );
};

export default AdminHeader;