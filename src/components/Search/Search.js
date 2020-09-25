import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fake data/Info';
import SearchPlace from '../SearchPlace/SearchPlace';

const Search = () => {
    

    const {category} = useParams(); // category data k filter out korbo.kore search a show korbo

    const [data, setData] = useState(fakeData)

    //  category data filtering
    const [product ,setProduct] = useState([])
    useEffect(()=>{
        const matched = data.filter(pd => pd.category === category && category.toLowerCase())
        setProduct(matched)

    },[category])

    return (
        <div>
            {
               product.map(pl => <SearchPlace place={pl} key={pl.id}></SearchPlace>) 
            }
        </div>
       
    );
};

export default Search;