import { Button, Form } from 'react-bootstrap';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/image (3).png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CategoryContext } from '../../App';
import SearchPlace from '../SearchPlace/SearchPlace';


const Header = () => {
    const [loggedInUser] = useContext(CategoryContext)
    return (
        <div >
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/booking">News</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    
                    <li>
                        <Link to="/login">Contact</Link>
                    </li>
                    <li>
                        <Link to ='/searchPlace'>Search</Link>
                    </li>
                    <li>
                        <Button variant="warning">Login</Button>
                    </li>
                   
                    <li style={{color:'white'}}>
                        {loggedInUser.email}
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;