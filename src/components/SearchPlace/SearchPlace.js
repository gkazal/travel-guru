import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import icon from '../../images/Icon/star_1_.png'

const SearchPlace = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginBottom:'10px'
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

    const { category, description, image, price } = props.place

    const classes = useStyles();

    return (
        <Row>
            <Col>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={image} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {category}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {description}
                                        </Typography>

                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                            <img style={{width:'20px'}} src={icon} alt=""/>4.9(5)
                                            
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">${price}</Typography>
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

export default SearchPlace;