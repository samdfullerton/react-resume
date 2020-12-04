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
              <img
              src="https://scontent.fdet3-1.fna.fbcdn.net/v/t1.0-9/51628628_10100338894924297_3997316055113400320_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=_-Ff_EMa5fcAX_PR7yW&_nc_ht=scontent.fdet3-1.fna&oh=e433c85a1374385e31cf876ae8821201&oe=5FF0CC1B"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Sam Fullerton</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am currently in enrolled Northwestern University's Coding Bootcamp. I am excited to learn and explore this wonderful world of coding.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(773) 733-8608</p>
            <h5>Email</h5>
            <p>samdfullerton@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2003}
              endYear={2014}
              schoolName="North Central College"
              schoolDescription="Private Liberals College"
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="Northwestern University"
                 schoolDescription="Private Research University"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2010}
              endYear={2013}
              jobName="Noble Network of Charter Schools"
              jobDescription="Founding Band Director"
              />

              <Experience
                startYear={2015}
                endYear={2016}
                jobName="Archdiocese of Chicago"
                jobDescription="General Music Teacher"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
