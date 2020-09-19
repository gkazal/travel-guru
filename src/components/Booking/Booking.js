import React from 'react';

import { Button, Card, Col, Container, Input, FormGroup, Row, Form } from 'react-bootstrap';
import './Booking.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Booking = () => {

    return (
        <Container>
            <Row style={{ marginTop: '80px' }}>
                <Col className="destination" >
                    <Card.Body>
                        <Card.Title style={{fontSize:'60px'}}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>

                </Col>
                <Col >
                    <Form className="form" >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Row style={{ padding: '20px' }}>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="date" />

                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group >
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="date" />

                                </Form.Group>
                            </Col>
                        </Row>

                        <Button style={{marginLeft:'5px'}} variant="warning" size="md" block>
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>

    );
};

export default Booking;