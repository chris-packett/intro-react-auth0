import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import SplashPage from './Components/Home/SplashPage'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Callback from './Components/Callback/Callback'

import Auth from './Auth/Auth';
import history from './history';
import './App.css';

const auth = new Auth()

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={SplashPage} />
          <Route path="/home" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }} />
        </Switch>
      </Router>
    );
  }
}

export default App;
