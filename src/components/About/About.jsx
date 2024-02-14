import React from 'react'
import classes from './About.module.css'
import Goat from '../Img/Goat.jpg'

const About = () => {
  return (
    <div className={classes.About} id="About">
      <h2>About Me</h2>
      <div className={classes.Conatiner}>
        <img className={classes.Goat} src={Goat} alt="Goat Yoga" />
        <p>While dabbling in goat yoga, my true calling is database Engineer. I've held many hats throughout my career - coach, student, bouncer, landscaper, soul-less retail associate, assistant manager &#40;don't worry I gave the other employees their souls back&#41;. No matter the hat, I found that I was missing a purpose, one that software engineering has afforded: building valuable and scalable solutions for all kinds of users.<br/><br/>
        I obtained my certificate in Web Development through Devmountain's full-time Bootcamp and hold a bachelor's degree from the University of Utah. Currently Based in Salt Lake City, but open to opertunities country wide. If you do not see a skill below that would be nice to have for your position, let me know! I am a quick and eager learner. I hope to connect with you soon!</p>
      </div>
    </div>
  )
}


export default About