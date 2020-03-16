import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      // <div style={{width: '100%', margin: 'auto'}}>
      <div className="landing-div">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
            src="https://www.shareicon.net/avatar-profile-user-avatar-social-user-profiles-avatar-649770" 
            alt="Avatar Profile"
            className="avatar-img"/>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
