import React from 'react'
import classes from './Skills.module.css'

const Skills = () => {
  return (
    <div className={classes.Skills} id="Skills">
      <h2>Skills</h2>
      <div className={classes.SkillsCont}>
        <ul>
          <li>React |</li>
          <li>JavaScript |</li>
          <li>Tailwind |</li>
          <li>CSS3 |</li>
          <li>HTML5 |</li>
          <li>NodeJS |</li>
          <li>Express |</li>
          <li>Axios |</li>
          <li>Postman |</li>
          <li>Firebase |</li>
          <li>PostgreSQL |</li>
          <li>Heroku |</li>
          <li>Digitalocean |</li>
          <li>Git |</li>
          <li>GitHub </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills