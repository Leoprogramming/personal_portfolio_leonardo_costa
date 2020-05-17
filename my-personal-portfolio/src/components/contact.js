import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Leonardo Costa</h2>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}><h4>I am open to a new position - Also remote or relocating</h4></p>

          </Cell>
          <Cell col={6}>
            <h2>Contact</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    <a href="https://www.linkedin.com/in/leonardo-costa-developer/" target="_blank" rel="noopener noreferrer">LinkedIn:</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <h6><i className="fa fa-fax" aria-hidden="true"/>
                    LinkedIn message or E-Mail me first<span role="img" alt="avatar"> 😄</span> </h6>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <a href="mailto:leo.costa.programming@gmail.com" target="_blank" rel="noopener noreferrer">My E-Mail:</a>
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

export default Contact;