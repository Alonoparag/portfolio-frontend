import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import Home from './content/home/home';
import Blog from './content/blog/blog-main';
import AdminView from './content/blog/admin/AdminView';
import './App.css';
import {Link, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
        super(props);
        this.state = {
          isMobile: true
        }
        this.handleResize = this.handleResize.bind(this);
  }
  handleResize(){
    if(document.documentElement.clientWidth >= 768){
      let newState = Object.assign({}, this.state);
      newState.isMobile = false;
      this.setState(newState)
    } else if(document.documentElement.clientWidth < 768) {
      let newState = Object.assign({}, this.state);
      newState.isMobile = true;
      this.setState(newState)
    }

  }
  componentDidMount(){
    this.handleResize.apply(this);
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.handleResize.bind(this));
  }
  render() {
    let mobile;
    this.state.isMobile? mobile = true:mobile = false;
    // functions to render the routed components HOME and BLOG mobile friendly
    const HomeMobile = (props) =>{
      return(
        <Home mobile = {mobile}/>
      );
    };
    const BlogMobile = (props) =>{
      return(
        <Blog mobile = {mobile}/>
      );
    };
    return (
      <div className="App">
        <Navbar mobile = {mobile}/>
          <Switch>
            <Route exact path="/" render ={HomeMobile}/>
            <Route exact path="/blog" render ={BlogMobile}/>
            <Route exact path="/blog/admin" component={AdminView}/>
          </Switch>
        <footer>&copy; Alon Parag 2017, all rights reserved. Built with React.</footer>
      </div>
    );
  }
}

export default App;
