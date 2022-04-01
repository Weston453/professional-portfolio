import React from 'react'
import classes from './Projects.module.css'
import { FaGithub, FaYoutube, FaChevronUp } from "react-icons/fa";
import WeddingPicture from '../Img/WeddingPicture.PNG'
import SkiPakPicture from '../Img/SkiPakPicture.PNG'
import SpendTrackerPicture from '../Img/SpendTrackerPicture.PNG'

const handleURL = (url) => {
  return event => window.open(url, "_blank")
}

const Projects = () => {
  return (
    <div className={classes.Projects} id="Projects">
      <h2>Projects</h2>
      <div className={classes.ImageContainer}>
        <div className={classes.AllProjects}>
          <h2 className={classes.ProjectTitle}>Spend Tracker</h2>
          <div className={classes.Images}>
            <img className={classes.Thumbnail} src={SpendTrackerPicture} alt="Spend Tracker Project" />
            <div className={classes.ProjectDescription}>
              <p>This is my Devmountain Capstone project! It is a spend tracker built with a mobile first design that features user authentication, data visualization, and an intuitive UI<br/><br/>
              React | Tailwind | Firebase | ChartJS </p>
              <div className={classes.Icons}>
                <FaGithub size='30px' className={classes.Link} onClick={handleURL('https://github.com/Weston453/Spend-Tracker-Capstone')} />
                <FaYoutube size='30px' className={classes.Link} onClick={handleURL('https://youtu.be/eWveuxapa7w')} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.AllProjects}>
          <h2 className={classes.ProjectTitle}>SkiPak</h2>
          <div className={classes.Images}>
            <img className={classes.Thumbnail} src={SkiPakPicture} alt="SkiPak Project" />
            <div className={classes.ProjectDescription}>
              <p>I developed this project with vanilla JS it preforms full CRUD manipulation of DOM elements and utilizes the Weatherbit  API for current locational weather. <br/><br/>
              JavaScript | CSS3 | HTML5 | NodeJS | Express | Axios | Postman </p>
              <div className={classes.Icons}>
                <FaGithub size='30px' className={classes.Link} onClick={handleURL('https://github.com/Weston453/skipak')} />
                <FaYoutube size='30px' className={classes.Link} onClick={handleURL('https://youtu.be/OIjiTnF7myU')} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.AllProjects}>
          <h2 className={classes.ProjectTitle}>Wedding Website</h2>
          <div className={classes.Images}>
            <img className={classes.Thumbnail} src={WeddingPicture} alt="Wedding website preview" />
            <div className={classes.ProjectDescription}>
              <p>I am building a day of wedding website for the guest at my wedding to find helpful info, such as the itinterary, dinner/cocktail menues, wedding party bios and a feature to find your dinner seat.<br/><br/>
              React | Javascript | CSS3 </p>
              <div className={classes.Icons}>
                <FaGithub size='30px' className={classes.Link} onClick={handleURL('https://github.com/Weston453/wedding-website')} />
                {/* <FaYoutube size='30px' className={classes.Link} onClick={handleURL('https://youtu.be/OIjiTnF7myU')} /> */}
              </div>
            </div>
          </div>
        </div>    
      </div>
      <div className={classes.ArrowCont}>
        <a href="#Home">
          <FaChevronUp className={classes.UpArrow} />
          {/* <img className={classes.UpArrow} src={Arrow} alt="back to top" /> */}
        </a>
      </div>
    </div>
  )
}

export default Projects