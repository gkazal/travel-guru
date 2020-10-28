import React, { useContext, useState } from 'react';

import { Button, Card, Col, Container, Input, FormGroup, Row, Form } from 'react-bootstrap';
import './Booking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useParams } from 'react-router-dom';
import { CategoryContext } from '../../App';
import fakeData from '../fake data/Info';



const Booking = () => {

    const [name, setNames] = useContext(CategoryContext)

    const [data,fakedata] = useState(fakeData)
    //console.log(data)

    const { category} = useParams()
    // useparams theke category k nia fake data thke filter kore category r description k show korano jabe....

    setNames(category)

    //console.log(name.category)

    const history = useHistory(category)
    const handleBook = (category) => {
        history.push(`/search/${category}`)
    }

    return (
        <Container>
            <Row style={{ marginTop: '80px' }}>
                <Col className="destination" >
                    <Card.Body>
                        <Card.Title style={{ fontSize: '60px' }}>{category}</Card.Title>
                        <Card.Text>
                          {category}  Best Place for visit your dream destination
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

                        <Button onClick={() => handleBook(category)} style={{ marginLeft: '5px' }} variant="warning" size="md" block>
                            Booking
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>

    );
};

export default Booking;