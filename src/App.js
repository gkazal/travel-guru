import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import header from './images/background.png'
import Header from './components/Header/Header';
import Destination from './components/Destination/Destination';
import Booking from './components/Booking/Booking';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Home from './components/Home/Home';


function App() {

  return (
      <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
        <Router>
          <Header />
          <Switch>

            <Route path="/destination">
              <Destination />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/createAccount">
              <CreateAccount></CreateAccount>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/search">
              <Search></Search>
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

          </Switch>
        </Router>
      </div>

  );
}

export default App;
