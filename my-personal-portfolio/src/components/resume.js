import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePicture from '../profilePicture.jpg';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img className="avatar-img"
              src={profilePicture} 
              alt="avatar" 
              style={{ height: '200px' }}
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Leo Costa</h2>
            <h4 style={{ color: 'grey' }}>Full-Stack Developer</h4>
          </Cell>
          <Cell className="resume-right-col" col={8}>Right Side</Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;