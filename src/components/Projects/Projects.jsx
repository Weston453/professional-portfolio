import React from 'react'
import classes from './Projects.module.css'
import Arrow from '../Img/UpArrow.svg'

const Projects = () => {
  return (
    <div className={classes.Projects} id="Projects">
      <h2>Projects</h2>
      <div className={classes.ImageContainer}>
        <div className={classes.AllProjects}>
          <h2 className={classes.ProjectTitle}>Spend Tracker</h2>
          <div className={classes.Images}>
            <div className={classes.test}></div>
            <p>Donec ac mauris pellentesque, pretium nunc eget, rutrum magna. Aliquam purus est, varius et eleifend eget, volutpat in risus. Aenean lobortis volutpat urna sed fermentum. Praesent venenatis cursus viverra. Integer vel facilisis dolor. Etiam elementum dolor vel dolor consectetur finibus.</p>
          </div>
        </div>
        <div className={classes.AllProjects}>
          <h2 className={classes.ProjectTitle}>SkiPak</h2>
          <div className={classes.Images}>
            <div className={classes.test}></div>
            <p>Donec ac mauris pellentesque, pretium nunc eget, rutrum magna. Aliquam purus est, varius et eleifend eget, volutpat in risus. Aenean lobortis volutpat urna sed fermentum. Praesent venenatis cursus viverra. Integer vel facilisis dolor. Etiam elementum dolor vel dolor consectetur finibus.</p>
          </div>
        </div>
        <div className={classes.AllProjects}>
          <h2 className={classes.ProjectTitle}>Wedding Website</h2>
          <div className={classes.Images}>
            <div className={classes.test}></div>
            <p>Donec ac mauris pellentesque, pretium nunc eget, rutrum magna. Aliquam purus est, varius et eleifend eget, volutpat in risus. Aenean lobortis volutpat urna sed fermentum. Praesent venenatis cursus viverra. Integer vel facilisis dolor. Etiam elementum dolor vel dolor consectetur finibus.</p>
          </div>
        </div>    
      </div>
      <div className={classes.ArrowCont}>
        <a href="#Home">
          <img className={classes.Image} src={Arrow} alt="back to top" />
        </a>
      </div>
    </div>
  )
}

export default Projects