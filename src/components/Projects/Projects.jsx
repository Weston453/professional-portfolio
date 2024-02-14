import React from 'react'
import classes from './Projects.module.css'
import { FaGithub, FaYoutube, FaChevronUp } from "react-icons/fa";
import SkiPakPicture from '../Img/SkiPakPicture.PNG'
import SpendTrackerPicture from '../Img/SpendTrackerPicture.PNG'

const handleURL = (url) => {
  return event => window.open(url, "_blank")
}

const Projects = () => {
  return (
    <div className={classes.Projects} id="Projects">
      <h2>Featured Projects</h2>
      <div className={classes.ImageContainer}>

        <div className={classes.AllProjects}>
          <div className={classes.ProjectCard}>
            <div className={classes.ProjectHeader}>
              <h2 className={classes.ProjectTitle}>Spend Tracker</h2>
            </div> 
            <div className={classes.ProjectBody}>
              <img className={classes.Thumbnail} src={SpendTrackerPicture} alt="Spend Tracker Project" />
              <div className={classes.ProjectDescription}>
                <p>As my Capstone project at Devmountain, the Spend Tracker is built with a mobile-first design featuring user-authentication, data visualization, and an intuitive UI.</p>
                <p className={classes.Skills}>React | Tailwind | Firebase | ChartJS </p>
                <div className={classes.Icons}>
                  <FaGithub size='30px' className={classes.Link} onClick={handleURL('https://github.com/Weston453/Spend-Tracker-Capstone')} />
                  <FaYoutube size='30px' className={classes.Link} onClick={handleURL('https://youtu.be/eWveuxapa7w')} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.AllProjects}>
          <div className={classes.ProjectCard}>
            <div className={classes.ProjectHeader}>
              <h2 className={classes.ProjectTitle}>SkiPak</h2>
            </div>
            <div className={classes.ProjectBody}>
              <img className={classes.Thumbnail} src={SkiPakPicture} alt="SkiPak Project" onClick={handleURL('http://on-the-snow.herokuapp.com/')} />
              <div className={classes.ProjectDescription}>
                <p>A skiing community tool, created using vanilla JS, that preforms full CRUD manipulation of DOM elements and utilizes Weatherbit API for locational weather.</p>
                <p className={classes.Skills}>JavaScript | CSS3 | HTML5 | NodeJS | Express | Axios | Postman </p>
                <div className={classes.Icons}>
                  {/* <FaGithub size='30px' className={classes.Link} onClick={handleURL('https://github.com/Weston453/skipak')} /> */}
                  <FaGithub size='30px' className={classes.Link} />
                  <FaYoutube size='30px' className={classes.Link} onClick={handleURL('https://youtu.be/OIjiTnF7myU')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ArrowCont}>
        <a href="#Home">
          <FaChevronUp className={classes.UpArrow} />
        </a>
      </div>
    </div>
  )
}

export default Projects