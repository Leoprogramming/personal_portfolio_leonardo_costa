import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingPage';
import AboutMe from './aboutMe';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
  <switch>
    <Route exact path="/" component={LandingPage} />
  </switch>
)

export default Main;