import React, { createContext, useState } from 'react';
import './Destination.css'

import fakeData from '../fake data/Info';
import Home from '../Home/Home';

export const PlaceContext = createContext()



const Destination = () => {

    const [placeinfo,setPlaceinfo] = useState(fakeData)

    //console.log(placeinfo)

    return (
        <PlaceContext.Provider value={[placeinfo,setPlaceinfo]}>
             <div>
                <h2>This is destinaton</h2>
                <Home></Home>
                {
                    //placeinfo.map(place => <Home place={place}></Home>)
                }
            </div>
        </PlaceContext.Provider>
       
    );
};

export default Destination;