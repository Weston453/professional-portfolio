import React from 'react'
import classes from './About.module.css'
import Goat from '../Img/Goat.jpg'

const About = () => {
  return (
    <div className={classes.About} id="About">
      <h2>About Me</h2>
      <div className={classes.Conatiner}>
        <img className={classes.Goat} src={Goat} alt="Goat Yoga" />
        <p>I am a full-stack web developer who graduted from Devmountains full-time web dev bootcamp. The more difficult a problem is to solve the more satisfaction comes when I reach the solution. I am currently based in Salt lake City but I am looking for a full time Remote position. I hope to connect with you soon!</p>
      </div>
    </div>
  )
}

export default About