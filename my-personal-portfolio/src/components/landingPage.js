import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePicture from '../profilePicture1.jpg'

class Landing extends Component {
  render() {
    return(
      // <div style={{width: '100%', margin: 'auto'}}>
      <div className="landing-div">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img"
            src={profilePicture} 
            alt="Avatar Profile"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
