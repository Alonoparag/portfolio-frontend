import React,{Component} from 'react';
import PostPreview from './components/post-preview'
import './blog.css';

class BlogPosts extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [{
        id: 1,
        title: `First Check`,
        author:`Alon`,
        date: Date(),
        body: `This is a nice check`
      },
      {
        id: 2,
        title: 'Second Check',
        author:'Alon',
        date: Date(),
        body: `This is a nice check`
      },
      {
        id: 3,
        title: 'Third Check',
        author:'Alon',
        date: Date(),
        body: `This is a nice check`
      }]
    };

  }
  render(){
    const posts = this.state.posts.map(post =>
      (<PostPreview
        key = {post._id} title ={post.title}
        author = {post.author} date = {post.date}
        body = {post.body} link = {`/blog/${post._id}`}/>)
    );
    return(
      <section id = "blog">
        <ul>
          {posts}
        </ul>
      </section>
    );
  }
}

export default BlogPosts;
