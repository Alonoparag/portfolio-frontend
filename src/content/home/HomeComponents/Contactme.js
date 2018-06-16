        import React, {Component} from 'react'
        import IconGithub from './svg/IconGithub';
        import IconEmail from './svg/IconEmail';
        import IconLinkedin from './svg/IconLinkedin';

        const Contactme = ({mobile})=>{

          return(
            <section  className = "home-content" id = "contact">
              <aside><h3>Lets keep in touch...</h3></aside>
              <div className="group-float">
                <ul>
                  <li>
                    <a id = "email" className = "contact-logo-mobile" href="mailto:allon.parag@gmail.com" target="_blank">
                      <IconEmail/>
                    </a>
                  </li>
                  <li>
                    <a  id = "github" className = "contact-logo-mobile" href="https://github.com/Alonoparag" target="_blank">
                        <IconGithub/>
                    </a>
                  </li>
                  <li>
                    <a id = "linked" className = "contact-logo-mobile" href="https://il.linkedin.com/in/alon-parag-930310152" target="_blank">
                      <IconLinkedin/>
                    </a>
                  </li>
                  <li>

                  </li>
                </ul>
              </div>
            </section>)
        };

        export default Contactme;
