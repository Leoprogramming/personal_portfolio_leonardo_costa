import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){

    if (this.state.activeTab === 0) {
      return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://commons.wikimedia.org/wiki/File:React-icon.svg) center / cover'}}>React Project #1</CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci consequuntur quo atque nesciunt! Repudiandae fuga magni maxime voluptas! Voluptatem deserunt non doloribus doloremque fugiat dolor voluptatum dignissimos corporis atque.</CardText>
          <CardActions>
            <Button colored>GitHub</Button>
            <Button colored>GitHub</Button>
            <Button colored>GitHub</Button>
          </CardActions>
        </Card>
      )
    } else if(this.state.activeTab === 1){
      return(
      <div>
        <h1>This is Ruby</h1>
      </div>
      )
    } else if(this.state.activeTab === 2) {
      return(
      <div>
        <h1>This is JavaScript</h1>
      </div>
      ) 
    } else if(this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ruby/Rails</Tab>
          <Tab>JavaScript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          {this.toggleCategories()}
        </section>
      </div>
    );
  }
}

export default Projects;