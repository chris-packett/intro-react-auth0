import React, { Component } from 'react';
import Auth from '../../Auth/Auth'
import logo from '../../logo.svg'

const auth = new Auth();

class SplashPage extends Component {

    login = () => {
        auth.login();
    }

    render() {
        const buttonStyle = {
            width: 100,
            height: 30,
            borderRadius: '1em',
        }
        
        return (
            <div className="App">
                <header className="App-header">
                    <img className="App-logo" src={logo} alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <button style={buttonStyle} onClick={this.login}>Get Started!</button>
                </header>
            </div>
        );
    }
}

export default SplashPage;
