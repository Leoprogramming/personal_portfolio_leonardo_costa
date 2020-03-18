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
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deserunt officia exercitationem harum dolorum itaque eligendi enim ratione nesciunt. Eaque nostrum nobis tenetur incidunt rem possimus, perspiciatis error in dolorum.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>Berlin</p>
            <h5>Phone</h5>
            <p>(555) 123-456-789</p>
            <h5>E-Mail</h5>
            <p>leo.coding.public@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>Right Side</Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;