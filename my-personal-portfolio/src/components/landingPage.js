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
                
                {/* GitHub */}
                <a href="https://github.com/Leoprogramming" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/leonardo-costa-berlin/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                
                {/* E-Mail */}
                <a href="leo.costa.programming@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-at" aria-hidden="true" />
                </a>
                
                <a href="https://codepen.io/leoprogramming" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-codepen" aria-hidden="true" />
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
