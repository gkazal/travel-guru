import { Button, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../images/sundarbon/Modern-Living-Rooms-Forest-Views-21-1-Kindesign.jpg'

const Search = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }));


    const classes = useStyles();

    return (
        <Row>
            <Col>
            <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={img} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Standard license
                  </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                  </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                  </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                  </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>

            </Col>



            <Col>

            </Col>
        </Row>
    );
};

export default Search;