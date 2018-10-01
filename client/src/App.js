import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home'
import Callback from './Components/Callback/Callback'
import Auth from './Auth/Auth';
import history from './history';
import logo from './logo.svg';
import './App.css';

const auth = new Auth()

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  goTo(route) {
    history.replace(`/${route}`)
  }

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Navbar fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Auth0 - React</Link>
              </Navbar.Brand>
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'home')}
              >
                Home
              </Button>
              {
                !auth.isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
              }
              {
                auth.isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
              }
            </Navbar.Header>
          </Navbar>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
