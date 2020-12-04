import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import githubMark from '../images/GitHub-Mark-64px.png'


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
            <CardTitle style={{color: '#fff', height: '176px', background: 'light blue center / cover'}} >React Project #2</CardTitle>
            <CardText>
             resume
            </CardText>
            <CardActions border>
              <Button colored  href='https://fullerton-portfolio.herokuapp.com/'> Demo</Button>
              <a href= 'https://github.com/samdfullerton/react-resume'>
                <img src={githubMark}></img>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
         

          {/* Project 3 */}
         
          
        </div>


      )
    }  if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:'https://thumbs-prod.si-cdn.com/jr381ZIMuLmYASliRy1NrNOUrxc=/420x240/https://public-media.si-cdn.com/filer/Unified-Theory-Gumbo-631.jpg center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Whats for Dinner?
            </CardText>
            <CardActions border>
              <Button colored href='https://jalbert12485.github.io/whats-for-dinner/'>Live Demo</Button>
              <a href= 'https://github.com/jalbert12485/whats-for-dinner'>
                <img src={githubMark}></img>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: ' center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Time Quiz
            </CardText>
            <CardActions border>
              <Button colored href=' https://samdfullerton.github.io/quiz/'>Live Demo</Button>
              <a href= 'https://github.com/samdfullerton/note-taker'>
                <img src={githubMark}></img>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'light blue center / cover'}} >React Project #2</CardTitle>
            <CardText>
              note taker
            </CardText>
            <CardActions border>
              <Button colored  href='https://api-routes.herokuapp.com/'>Live Demo</Button>
              <a href= 'https://github.com/samdfullerton/note-taker'>
                <img src={githubMark}></img>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'light blue center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Readme Generator
            </CardText>
            <CardActions border>
              <Button colored  href='https://drive.google.com/file/d/1N9JXMgVTeMkBUKpuqpEoPwGatbw0Dma7/view'> Demo</Button>
              <a href= ' https://github.com/samdfullerton/readme-generator'>
                <img src={githubMark}></img>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(../images/password-generator.png) center / cover'}} >Node.js</CardTitle>
            <CardText>
              password generator
            </CardText>
            <CardActions border>
              <Button colored href='https://samdfullerton.github.io/password-generator/'>Live Demo</Button> 
              <a href= 'https://github.com/samdfullerton/password-generator'>
                <img src={githubMark}></img>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>NodeJS</Tab>
          <Tab>Html/CSS</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
