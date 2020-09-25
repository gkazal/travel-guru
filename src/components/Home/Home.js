import React, { useState } from 'react';
import './Home.css'
import Destination from '../Destination/Destination';

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