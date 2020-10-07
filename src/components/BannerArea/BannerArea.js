import React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';

const BannerArea = () => {
    return (
        <Container>
            <Row>
                <Col md={12} className="text-center">
                    <h1>I grow by helping people in need.</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}></Col>
                <Col md={4} className="text-center">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="success">Search</Button>
                    </Form>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
};

export default BannerArea;