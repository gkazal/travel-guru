import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Home.css'
import cox from '../../images/coxbazar/Rectangle 27.png'
import { PlaceContext } from '../Destination/Destination';

const Home = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            background: (0, 128, 0, 0),
            color: 'white',
            height: '200px'
        },
    }));

    const classes = useStyles();

    const [placeinfo] = useContext(PlaceContext)
    //console.log(props.place)
    console.log(placeinfo)
    
    return (
        <div style={{ borderStyle: 'none', marginTop: '100px' }} className={classes.root}>
        <Grid container >
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Card.Body>
                        <Card.Title style={{ fontSize: '60px' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="warning">Booking</Button>
                    </Card.Body>
                </Paper>
            </Grid>

            <Grid className="card" item xs={8} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cox} />
                    <Card.Body>
                        <Card.Title>Title:</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                
            </Grid>

        </Grid>
    </div>
    );
};

export default Home;