import React from 'react';
import './Destination.css'

import { Button, Card} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Destination = (props) => {

    const { category, img, description } = props.product

    console.log(category, description)

    const cardStyle = {
        //width: '18rem',
        maxWidth: 200,
        display: 'inline-block',
        margin: '5px',
        padding: '5px',

        marginLeft: '20px',

    }

    const history = useHistory()
    const handleBook = (category) => {
        history.push(`/booking/${category}`)
    }

    return (

        <Card style={cardStyle}>
            <Card.Img style={{ width: '200', height: '250px' }} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>

                <Button onClick={() => handleBook(category)} variant="warning">Booking</Button>
            </Card.Body>
        </Card>
    );
};

export default Destination;