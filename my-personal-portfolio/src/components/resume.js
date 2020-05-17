import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>

            </div>
            <div class="resume_text">
            <h2 style={{paddingTop: '2em'}}>Biography</h2>
            <h4 style={{color: 'white'}}>Leonardo Costa</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi, I'm Leo. I grew up in a vibrant city by the Atlantic coast, and have been interested in technology since self-teaching myself the DOS operational system in the 90s. My main interests are Web application development and Project Management/Operations.
            <p></p>
            <p>I am currently in the process of improving my JavaScript, React and Node.js skills, and plan to learn more about DevOps thereafter.</p>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>RESIDENCE</h5>
            <p>Berlin, Germany</p>
            <h5>WORKING PERMIT</h5>
            <p>I have <b>full</b> working permissions both in The EU/EEA and The UK.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Le Wagon: Full-Stack Web Developer"
              schoolDescription="
              Le Wagon is ranked as the worlds best coding bootcamp for the past 3 years. With over 450-500 Hours of training, lectures and exercises, topics include:
              Ruby, Ruby on Rails, OOP, APIs, JSON, Scraping, Relational DB, SQL, Postgresql, HTML, CSS, Bootstrap, JavaScript ES6, React, Wireframing, Prototyping, UI Design, Test Driven Development, Git, Github, Technical Workflow."
            />

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="freeCodeCamp.org"
              schoolDescription="Responsive Web Design Developer Certificate - Approximately 600 hours covering HTML5/CSS FlexBox and Grid, Sass, React, JavaScript and more in real life projects"
            />

            <Education
              startYear={2007}
              endYear={2014}
              schoolName="Universidade de Fortaleza"
              schoolDescription="Bachelor's Degree in Law with posterior Postgraduate Studies in International Law, Foreign Relations and Trade"
            />

            <hr style={{borderTop: '3px solid #f0145f'}} />
            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Full-Stack Developer / Freelancer"
              jobDescription="Technical consultations for small clients, Ruby, JavaScript/React development. SEO consultations."
            />

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Operations Manager, Crazy Voyages"
              jobDescription="Responsible for all operations in Berlin. 
              Duties included: Personally running all tours and events, business planning and development in Berlin, staffing and training, managing the partnership network day-to-day operations among other responsibilities."
            />

            <Experience
              startYear={2014}
              endYear={2017}
              jobName="Operations Manager - Original Europe Tours"
              jobDescription="Duties included: Implementing and improving the product, company's SEO and improving the partnership's network and operating tours up to 200+ guests among other responsibilities."
            />

            <hr style={{borderTop: '3px solid #f0145f'}} />
            <h2>Skills</h2>

            <Skills
              skill="Ruby"
              progress={45}
            />

            <Skills
              skill="JavaScript"
              progress={45}
            />
                    
            <Skills
              skill="HTML/CSS"
              progress={75}
            />

            <Skills
              skill="React"
              progress={40}
            />

            <Skills
              skill="Bootstrap"
              progress={50}
            />

            <Skills
              skill="Node.js"
              progress={40}
            />

            <Skills
              skill="APIs"
              progress={25}
            />

            <Skills
              skill="Git"
              progress={50}
            />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;