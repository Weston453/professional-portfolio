import React from 'react'
import classes from './Projects.module.css'
import Pimage from '../Img/Pimage.svg'

const Projects = () => {
  return (
    <div className={classes.Projects} id="Projects">
      <h2>Projects</h2>
      <div className={classes.ImageContainer}>
        <div className={classes.Images}>
          <div className={classes.test}></div>
          {/* <img className={classes.Picture} src={Pimage} alt="Project Images" /> */}
          <p>Donec ac mauris pellentesque, pretium nunc eget, rutrum magna. Aliquam purus est, varius et eleifend eget, volutpat in risus. Aenean lobortis volutpat urna sed fermentum. Praesent venenatis cursus viverra. Integer vel facilisis dolor. Etiam elementum dolor vel dolor consectetur finibus.</p>
        </div>
        <div className={classes.Images}>
          <div className={classes.test}></div>
            <p>Donec ac mauris pellentesque, pretium nunc eget, rutrum magna. Aliquam purus est, varius et eleifend eget, volutpat in risus. Aenean lobortis volutpat urna sed fermentum. Praesent venenatis cursus viverra. Integer vel facilisis dolor. Etiam elementum dolor vel dolor consectetur finibus.</p>
        </div>
        <div className={classes.Images}>
          <div className={classes.test}></div>
              <p>Donec ac mauris pellentesque, pretium nunc eget, rutrum magna. Aliquam purus est, varius et eleifend eget, volutpat in risus. Aenean lobortis volutpat urna sed fermentum. Praesent venenatis cursus viverra. Integer vel facilisis dolor. Etiam elementum dolor vel dolor consectetur finibus.</p>
        </div>
        <div className={classes.Images}>
          <div className={classes.test}></div>
              <p>Donec ac mauris pellentesque, pretium nunc eget, rutrum magna. Aliquam purus est, varius et eleifend eget, volutpat in risus. Aenean lobortis volutpat urna sed fermentum. Praesent venenatis cursus viverra. Integer vel facilisis dolor. Etiam elementum dolor vel dolor consectetur finibus.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects