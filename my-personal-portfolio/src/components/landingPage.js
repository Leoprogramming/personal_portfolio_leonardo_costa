import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.ibb.co/QNDs5cH/Leo-Profile-Circle.jpg"
              alt="avatar"
              className="avatar-img"
              />

              <div className="banner-text">
                <h1>Leonardo Costa</h1>
                <h3><i>Software Engineer</i></h3>
                <p>I'm a full-stack developer, entrepreneur, following his dream of working with programming. 
                <br></br>
                Alumni of Le Wagon, the full-stack coding school.
                My main interests are Web Application Development and Project Management.</p>
                <hr/>

                <p><b>Ruby/Rails | JavaScriptES6 | React | Node.js | Git | HTML/CSS | APIs</b></p>

              <div className="social-links">
<<<<<<< HEAD

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/leonardo-costa-programmer/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a href="https://github.com/Leoprogramming" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Twitter */}
              <a href="https://twitter.com/leoprogrammer17" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>

            </div>
=======
                
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
>>>>>>> 0bee79e559fa41d4c48a4d4281e95310b4f85202
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;