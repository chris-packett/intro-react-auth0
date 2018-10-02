import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Auth from '../../Auth/Auth'

const auth = new Auth();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    
    componentDidMount() {
        if (auth.isAuthenticated()) {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login = () => {
        auth.login();
    }

    logout = () => {
        auth.logout();
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        return (
            <div>
                <Navbar fluid>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/home">Auth0 - React</Link>
                    </Navbar.Brand>
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={() => this.goTo('home')}
                    >
                        Home
                    </Button>
                    {
                        !this.state.isLoggedIn && (
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.login}
                        >
                            Log In
                        </Button>
                        )
                    }
                    {
                        this.state.isLoggedIn && (
                            <Button
                                bsStyle="primary"
                                className="btn-margin"
                                onClick={() => this.goTo('profile')}
                            >
                                Profile
                            </Button>
                        )
                    }
                    {
                        this.state.isLoggedIn && (
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.logout}
                        >
                            Log Out
                        </Button>
                        )
                    }
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}

export default Home;
