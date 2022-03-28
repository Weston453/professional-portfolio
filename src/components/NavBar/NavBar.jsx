import React from 'react'
import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
    <nav>
        <ul>
            <li>
                <a href="/#Home">Home</a>
            </li>
            <li>
                <a href="/#About">About Me</a>
            </li>
            <li>
                <a href="/#Skills">Skills</a>
            </li>
            <li>
                <a href="/#Projects">Projects</a>
            </li>
            <li>
                <a href="/#Contact">Contact</a>
            </li>
        </ul>
    </nav>
</div>
  )
}

export default NavBar