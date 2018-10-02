import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import Auth from '../../Auth/Auth'
import './Profile.css';

const auth = new Auth();

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }
    
    componentDidMount() {
        if (!auth.userProfile) {
            auth.getProfile((err, profile) => {
                this.setState({
                    profile: profile
                });
            });
        }
        else {
            this.setState({
                profile: auth.userProfile
            })
        }
    }
    
    render() {
        const profile = this.state.profile
        return (
            <div className="container">
               <div className="profile-area">
                    <h1>{profile.name}</h1>
                    <Panel header="Profile">
                        <img src={profile.picture} alt="profile" />
                        <div>
                        <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
                        <h3>{profile.nickname}</h3>
                        </div>
                        <pre>{JSON.stringify(profile, null, 2)}</pre>
                    </Panel>
               </div> 
            </div>
        );
    }
}

export default Profile;
