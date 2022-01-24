import './courseProject.css';
import { FaGithub } from 'react-icons/fa';

const CourseProject = ({project}) => {
  const { id, name, course, desc, techs, img, github } = project;
  return (
    <div className='cp-item' key={`cpi-${id}`}>
      <div className="cpi-left">
        <div className="cpi-left-container">
          <h2 className='cpi-title'>{name} - {course}</h2>
          <p className='cpi-desc'>{desc}</p>
          <div className="cpi-tech">
            <h3 className='cpi-tech-title'>Project is done with:</h3>
            <ul className='cpi-tech-list'>
              {techs.map((item, idx) =>
                <li className="cpi-tech-item" key={`cpi-tech-${id}-${idx}`}>{item}</li>
              )}
            </ul>
          </div>
          
          <div className="cpi-github">
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub className='cpi-icon'/>
            </a>
          </div>
        </div>
      </div>
      <div className="cpi-right">
        <img src={img} alt="" className='cpi-img'/>
      </div>
    </div>
  )
}

export default CourseProject
