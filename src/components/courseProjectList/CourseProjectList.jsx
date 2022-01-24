import './courseProjectList.css'
import CourseProject from '../courseProject/CourseProject';
import { courseProjects } from '../../data/courseProjectData';
import arrow from '../../img/arrow.png'
import { useState } from 'react';

const CourseProjectList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlide = (dir) => {
    dir === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0 )
  }
  return (
    <div className='cpl' id='course-projects'>
      <div className="cpl-texts">
        <h1 className='cpl-title'>Course Projects</h1>
        <p className='cpl-desc'>These are some of the projects that I have participated from university courses </p>
      </div>
      <div className="cpl-slider" style={{ transform: `translate(-${currentSlide*100}vw, -50%)`}}>
        {courseProjects.map(pr => 
          (<div className="cpl-container" key={`course-prj-${pr.id}`}>
            <CourseProject project={pr}/>
          </div>)
        )}
        
      </div>
      <img src={arrow} className='cpl-arrow-left' alt="" onClick={() => handleSlide("left")}/>
      <img src={arrow} className='cpl-arrow-right' alt="" onClick={() => handleSlide("right")}/>
    </div>
  )
}

export default CourseProjectList
