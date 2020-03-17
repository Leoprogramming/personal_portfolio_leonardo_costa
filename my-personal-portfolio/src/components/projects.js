import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import reactLogoBlack from '../reactLogoBlack.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return(

      <div className="projects-grid">

        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img className="react-logo" src={reactLogoBlack} alt="react-logo" />
          <CardTitle className="card-title" >React Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci consequuntur quo atque nesciunt! Repudiandae fuga magni maxime voluptas! Voluptatem deserunt non doloribus doloremque fugiat dolor voluptatum dignissimos corporis atque.</CardText>
          <CardActions>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: 'white'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img className="react-logo" src={reactLogoBlack} alt="react-logo" />
          <CardTitle className="card-title" >React Project #2</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci consequuntur quo atque nesciunt! Repudiandae fuga magni maxime voluptas! Voluptatem deserunt non doloribus doloremque fugiat dolor voluptatum dignissimos corporis atque.</CardText>
          <CardActions>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: 'white'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img className="react-logo" src={reactLogoBlack} alt="react-logo" />
          <CardTitle className="card-title" >React Project #3</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci consequuntur quo atque nesciunt! Repudiandae fuga magni maxime voluptas! Voluptatem deserunt non doloribus doloremque fugiat dolor voluptatum dignissimos corporis atque.</CardText>
          <CardActions>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: 'white'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

      </div>

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