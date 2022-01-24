import "./project.css";
import { FiGithub } from 'react-icons/fi';
import { MdOpenInBrowser } from 'react-icons/md'

const Project = ({ img, name, github, demo }) => {

  return (
    <div className='project'>
      <div className="project-browser">
        <div className="project-circle green"></div>
        <div className="project-circle yellow"></div>
        <div className="project-circle red"></div>
      </div>
      <div className="project-content">
        <div className="project-imgBx">
          <img src={img} alt="" className="project-img" />
        </div>
        <div className="project-contentBx">
          <h3>{name}</h3>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <MdOpenInBrowser className="project-icon"/>
            Demo
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FiGithub className="project-icon"/>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
