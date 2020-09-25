import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import fakeData from '../fake data/Info';
import Destination from '../Destination/Destination';
import { createContext } from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import homePageFakeData from '../fake data/HomeFakedata';


const Home = () => {

    const [data, setData] = useState(homePageFakeData) // soja homepage a fake data anlam.then etake map korlam


    return (

        <div>
            {
                data.map(pd => <Destination product={pd} key={pd.id}></Destination>)
            }
        </div>

    );
};

export default Home;