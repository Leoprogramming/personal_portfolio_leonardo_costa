import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePictureFull from '../profilePictureFull.jpg'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Leo Costa</h2>
            <img className="profile-picture-full" src={profilePictureFull} alt="" />
          </Cell>
          <Cell col={6}>
            
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;