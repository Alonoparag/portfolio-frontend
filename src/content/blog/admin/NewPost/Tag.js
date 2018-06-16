
import React, {Component} from 'react'

const Tag = ({tag, key, handleTagDelete})=>{
  return(
    <li key = {key}>
      <div className = "post-tag">
        #{tag}<span className = "tag-delete" onClick = {handleTagDelete}>X</span>
      </div>
    </li>
  )
};



export default Tag;
