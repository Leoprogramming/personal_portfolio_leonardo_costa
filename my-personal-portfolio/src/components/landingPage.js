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
            <img 
            className="avatar-img"
            src={profilePicture} 
            alt="Avatar Profile"
            />

            <div className="banner-text">
              <h1>Full-Stack Web Developer</h1>
              <hr/>
              <p>HTML/CSS | Bootstrap | JavaScript | React | Ruby/Rails | NodeJS | Express | MongoDB</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/leonardo-costa-berlin/" target="_blank">
                  LinkedIn
                <i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
