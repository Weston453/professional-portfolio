import React from 'react'
import classes from './Contact.module.css'
import Arrow from '../Img/UpArrow.svg'
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";

const handleURL = (url) => {
  return event => window.open(url, "_blank")
}

const Contact = () => {
  return (
    <div className={classes.Contact} id="Contact">
      <div className={classes.ArrowCont}>
        <a href="#Home">
          <img className={classes.Image} src={Arrow} alt="back to top" />
        </a>
      </div>
      <div className={classes.Content}>
        <FaGithub size='30px' className={classes.Link} onClick={handleURL('https://github.com/Weston453')} />
        <FaLinkedin size='30px' className={classes.Link} onClick={handleURL('https://www.linkedin.com/in/weston-isheim/')} />
        <FaRegFileAlt size='30px' className={classes.Link} onClick={handleURL('https://docs.google.com/document/d/1tP6pE8hQTJYv6qDqshJNE7m9ahnwPSXNpXBKaSHuc24/edit?usp=sharing')} />
      </div>
      <p>WESTON ISHEIM &copy;</p>
    </div>
  )
}

export default Contact