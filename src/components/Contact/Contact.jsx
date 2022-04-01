import React from 'react'
import classes from './Contact.module.css'
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";

const handleURL = (url) => {
  return event => window.open(url, "_blank")
}

const Contact = () => {
  return (
    <div className={classes.Contact} id="Contact">
      <div className={classes.Content}>
        <div className={classes.IconLinks}>
          <FaGithub size='40px' className={classes.Link} onClick={handleURL('https://github.com/Weston453')} />
          <FaLinkedin size='40px' className={classes.Link} onClick={handleURL('https://www.linkedin.com/in/weston-isheim/')} />
          <FaRegFileAlt size='40px' className={classes.Link} onClick={handleURL('https://docs.google.com/document/d/1tP6pE8hQTJYv6qDqshJNE7m9ahnwPSXNpXBKaSHuc24/edit?usp=sharing')} />
        </div>
      <p>WESTON ISHEIM &copy;</p>
      </div>
    </div>
  )
}

export default Contact