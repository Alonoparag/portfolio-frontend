import React, {Component} from 'react';
import CreateNewPost from './NewPost/CreateNewPost';
import './AdminView.css';

class AdminView extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section id="admin">
        <CreateNewPost/>
      </section>
    );
  }
}

export default AdminView;
