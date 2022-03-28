import React from 'react'
import classes from './About.module.css'
import Goat from '../Img/Goat.jpg'

const About = () => {
  return (
    <div className={classes.About} id="About">
      <h2>About Me</h2>
      <div className={classes.Conatiner}>
        <img className={classes.Goat} src={Goat} alt="Goat Yoga" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pellentesque metus. Suspendisse pulvinar, diam et maximus imperdiet, quam tortor venenatis mauris, porttitor malesuada erat elit ut mi. Maecenas leo sapien, sagittis nec arcu quis, efficitur interdum felis. Nam non euismod tellus.</p>
      </div>
    </div>
  )
}

export default About