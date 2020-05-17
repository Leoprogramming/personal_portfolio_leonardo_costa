import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">


          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/6nLdNsG/Portfolio.png) center / cover'}} >Portfolio Website</CardTitle>
            <CardText>
              The very site you are currently browsing. 
              <p></p> A React based personal portfolio app using create-react-app and React Router v4.
            </CardText>
            <CardActions border>

              <Button colored><a href="https://github.com/Leoprogramming/personal_portfolio_leonardo_costa" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://i.ibb.co/3WHtKPp/Covid-19-Tracker-React.png) center / cover'}} >Covid-19 Tracker</CardTitle>
            <CardText>
              <p></p> A Covid-19 infected chart using React-Hooks, Axios-APIs, Material-UI, Charts-JS and more.
            </CardText>
            <CardActions border>

              <Button colored><a href="https://github.com/Leoprogramming/covid-19-tracker-react" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/C021y3x/Space-X-Launch-Stats-Project.png) center / cover'}} >SpaceX Launch Status</CardTitle>
            <CardText>
              <p></p>A project made for learning Apollo GraphQL, React, Express, Bootstrap consuming SpaceX's public API.
            </CardText>
            <CardActions border>

              <Button colored><a href="https://github.com/Leoprogramming/graphQL_with_apollo_react_express_spacex_api" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>
          </Card>

        </div>

      );
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/k3TzKZQ/OJA.png) center / cover'}} >OJA</CardTitle>
            <CardText>
              OJA (Optimized Job Applications) is a project designed to help young professionals and students track and organize their job applications and interviews, maximizing their chances of landing the perfect job.

              <p></p> Built on Ruby on Rails / HTML5 / CSS and JavaScript.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Agathebadia/interview_tracker" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
              <Button colored><a href="http://www.myoja.de/" target="_blank" rel="noopener noreferrer">Live Website</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/KXFFb1F/Tooli.png) center / cover'}} >Tooli</CardTitle>
            <CardText>
              TOOLI is an AirBnB-clone built on Ruby on Rails. A platform where people can buy, sell and rent tools in a neighborhood setting.
              <p></p>Built on Ruby on Rails / HTML5 / CSS and JavaScript
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/CapMarvel/tooli" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
              <Button colored><a href="https://tooli-capmarvel.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
            </CardActions>
          </Card>

        </div>
      );
    } 

    else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">

        </div>

      );
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is Shopify</h1></div>
      );
    }

  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>Other</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    );
  }
}

export default Projects;