import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Search from './Components/Search/Search';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import ShowEvents from './Components/ShowEvents/ShowEvents';
import ShowEventList from './Components/ShowEventList/ShowEventList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Search></Search>
            <ShowEvents></ShowEvents>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/event/:id">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/showList">
            <Header></Header>
            <ShowEventList></ShowEventList>
          </PrivateRoute>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
