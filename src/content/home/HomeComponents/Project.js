
        import React, {Component} from 'react'

        const Project = ({name, link, description, key}) =>
        (
          <li className = "project" key = {key}>
            <div>
              <h3><a href = {link} target = "_blank">{name}</a></h3>
              <p>
                {description}
              </p>
            </div>
          </li>
        );

        export default Project;
