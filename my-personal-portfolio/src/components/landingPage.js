import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePicture from '../profilePicture.jpg'

class Landing extends Component {
  render() {
    return(
      // <div style={{width: '100%', margin: 'auto'}}>
      <div className="landing-div">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="profile-picture"
            src={profilePicture} 
            alt="Avatar Profile"
            className="avatar-img"/>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
