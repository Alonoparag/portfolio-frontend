import React, { Component } from 'react';
import Tag from './Tag';
import './CreateNewPost.css';
import axios from 'axios';

class CreateNewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: 'Alon Parag',
            body: '',
            tags: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleTagDelete = this.handleTagDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let value = e.target.value;
        let newState = Object.assign({}, this.state);
        if (e.key === ' ' || e.key === 'Enter') {
            let tags = newState[e.target.name];
            // console.log(tags.length>0?tags[tags.length - 1]:0);
            newState[e.target.name].push({
                tagName: value,
                tagKey: tags.length > 0 ? tags[tags.length - 1].tagKey + 1 : 0
            });
            this.setState(newState);
            e.target.value = '';
        } else if (e.target.name !== 'tags') {
            newState[e.target.name] = value;
            this.setState(newState);
        }
    }

    handleTagDelete(e) {
        let tagToRemove = e.target.parentNode.innerText.slice(1, -1);
        let newState = Object.assign({}, this.state);
        newState.tags = newState.tags.filter(
            tag => tag.tagName !== tagToRemove
        );
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
        let url = 'localhost:3001/blog/admin';
        // fetch(url, {
        //   method: 'post',
        //   headers: new Headers({
        //     'Content-Type': 'application/json',
        //   }),
        //   body: JSON.stringify(this.state)
        // })
        // .then( resp =>{
        //   if(!resp.ok){
        //     if(resp.status >= 400 && resp.status < 500){
        //       return resp.json().then(data => {
        //         let err = {errorMessage: data.message};
        //         throw err;
        //       })
        //     } else {
        //       let err = {errorMessage: 'Please try again later, server is unable to process your request'};
        //       throw err;
        //     }
        //   }
        //   return resp.json();
        // })
        console.log(JSON.stringify(this.state));
        axios({
          method: 'post',
          url: url,
          headers:{
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(this.state)
        }).then(function(response){
          console.log(response)
          })
          .catch(function(error) {
                      console.log(error);
                    });
    }

    render() {
        const tags = this.state.tags.map(tag => (
            <Tag
                key={tag.tagKey}
                tag={tag.tagName}
                handleTagDelete={this.handleTagDelete}
            />
        ));
        return (
            <section id="newpost">
                <h1>Create New Post</h1>
                <form onSubmit={this.handleSubmit} method="POST">
                    <input
                        type="text"
                        id="title"
                        className="input-round"
                        name="title"
                        placeholder="Title"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        id="author"
                        className="input-round"
                        name="author"
                        placeholder="author"
                        onChange={this.handleChange}
                        defaultValue="Alon Parag"
                    />
                    <textarea
                        id="body"
                        name="body"
                        className="input-round"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        id="tags"
                        className="input-round"
                        name="tags"
                        placeholder="tags"
                        onKeyPress={this.handleChange}
                    />
                    <input
                        type="submit"
                        id="submit"
                        className="input-round"
                        name="submit"
                        value="SUBMIT"
                    />
                </form>
                <section id="tag-list">
                    <ul>
                        {tags}
                    </ul>
                </section>
            </section>
        );
    }
}

export default CreateNewPost;
