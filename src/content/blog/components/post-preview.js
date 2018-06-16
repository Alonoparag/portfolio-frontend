import React from 'react';

const PostPreview = ({key, title, author, date, body, link}) =>(
  <li key = {key}>
    <h3><a href={link}>{title}</a></h3>
    <h4>{author}<span>{date}</span></h4>
    <p>{body}</p>
  </li>
)

export default PostPreview;
