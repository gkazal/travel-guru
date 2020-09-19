import { Button, Form } from 'react-bootstrap';

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/image (3).png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
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
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/createAccount">Blog</Link>
                    </li>
                    <li>
                        <Link to="/login">Contact</Link>
                    </li>
                    <li>
                        <Button variant="warning">Login</Button>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;