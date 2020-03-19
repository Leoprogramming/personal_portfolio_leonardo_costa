import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profilePictureFull from '../profilePictureFull.jpg'

class About extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Leo Costa</h2>
            <img className="profile-picture-full" src={profilePictureFull} alt="avatar" />
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Coming from a background in Law and Business, I decided to pursue my dreams and chase my passion in Technology and Programming. Thanks to Le Wagon's Full-Stack Bootcamp I have been learning exponentially.</p>

          <h5>
          <strong style={{textDecoration: 'none', color: '#ff3f00'}}>Currently looking for a Full-Stack/Front-End Position in Berlin - Preferred Tech-Stack: 
            <br />
            Ruby/Rails, JavaScript/React/Node/Express/MongoDB</strong> 
          </h5>
          </Cell>
          <Cell col={6}>
            <h2>Some Of My Interests:</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '40px', fontFamily: 'Roboto Slab' }}>
                  <i className="fas fa-laptop-code" aria-hidden="true" />
                    Programming
                  </ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{ fontSize: '40px', fontFamily: 'Roboto Slab' }}>
                  <i className="fas fa-basketball-ball" aria-hidden="true"/>
                    Sports
                  </ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{ fontSize: '40px', fontFamily: 'Roboto Slab' }}>
                  <i className="fas fa-music" aria-hidden="true"/>
                    Music
                  </ListItemContent>
                </ListItem>
              
                <ListItem>
                  <ListItemContent style={{ fontSize: '40px', fontFamily: 'Roboto Slab' }}>
                  <i className="fas fa-book-reader" aria-hidden="true"/>
                    Learning New Things
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '40px', fontFamily: 'Roboto Slab' }}>
                  <i className="fas fa-gamepad" aria-hidden="true"/>
                    Video Games
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;