import React, { createContext, useState }  from 'react';
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
import SearchPlace from './components/SearchPlace/SearchPlace';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const CategoryContext = createContext()


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <CategoryContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
        <Router>
          <Header />
          <Switch>

            <Route path="/booking/:category">
              <Booking />
            </Route>
            <Route path="/createAccount">
              <CreateAccount></CreateAccount>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/search/:category">
              <Search></Search>
            </PrivateRoute>

            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home></Home>

            </Route>
            
          </Switch>
        </Router>
      </div>
      </CategoryContext.Provider>

  );
}

export default App;
