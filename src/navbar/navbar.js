import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

//home
//====projects
//====testimonials
//====contact
//blog
//====search

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {
                  home:[
                        {name:"Home", link:"/", key:"1"},
                        {name: "blog", link:"/blog", key:"2"},
                        {name:"Admin", link:"/blog/admin", key:"3"}
                        ]//,
                        // blog:[
                        // ]
                  };
  }

  whichLogo(){
    return  this.props.mobile? 'images/Glyph.png': 'images/logo_large.png';
  }


  render(){
    console.log(this.props.mobile)
    const navbar = this.state.home.map(button =>
                                              <li  key = {button.key}>
                                                <NavLink to={button.link}>
                                                  {button.name}
                                                </NavLink>
                                              </li>
                                      );


    return(
      <nav>
        <div className = "group-float">
        <img id = "glyph" src = {this.whichLogo()} alt = "logo"/>
          <ul>
            {navbar}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
