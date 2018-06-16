import React, {Component} from 'react'
import About from './HomeComponents/About';
import Project from './HomeComponents/Project';
import Contactme from './HomeComponents/Contactme';
import './Home.css';

class Home extends Component{
  constructor(props){
    super(props);
    this.projects = [
                      {name:"Calculator",
                      link:"https://alonoparag.github.io/fcc-Calculator/",
                      description:"A project from FreeCodeCamp, built with vanillaJS. I found it challenging and fun to implement mathemathical prescedence with javascript, and I invite you to check it out!"},
                      {name:"TwitchTV-api",
                      link:"https://alonoparag.github.io/fcc-Intermediate-Project-4-TwitchTV-API/",
                      description:"Project from FreeCodeCamp, implementing async call to TwitchTV, uses vanilaJS"},
                      {name:"Wikipedia Reader",
                      link:"https://alonoparag.github.io/fCC-Wikipedia-Viewer/",
                      description:"Wikipedia Reader project from FreeCodeCamp. implementing HTTP request from the Wikimedia API, built with vanilaJS"},
                      {name:"Pomodoro Clock",
                      link:"https://codepen.io/SunshineAllon/full/GxPBVr",
                      description:"Pomodoro Clock project from FreeCodeCamp. I enjoyed learning the works of the canvas element, and writing consice code for the project. used VanilaJS"},
                    ]
  }

  render(){
    const projects = this.projects.map((project, index)=>(
      <Project key = {index} name = {project.name} link = {project.link} description = {project.description}/>
    ))

    return(
      <div id = "home">
        <About/>
        <section className = "home-content" id = "projects">
          <h1>Featured Projects</h1>
          <ul>
            {projects}
          </ul>
        </section>
        <Contactme mobile = {this.props.mobile}/>
      </div>
    );

  }
}

export default Home;
