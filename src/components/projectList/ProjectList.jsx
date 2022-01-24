import Project from "../project/Project"
import "./projectList.css"
import { projects } from "../../data/projectsData"

const ProjectList = () => {
  return (
    <div className='pl' id='projects'>
      <div className="pl-texts">
        <h1 className="pl-title">Pet projects</h1>
        <p className="pl-desc">In my leisure time, I often write some small coding projects. Here are some of them.</p>
      </div>
      <div className="pl-list">
        {projects.map(proj => <Project key={proj.id} img={proj.img} name={proj.name} github={proj.github} demo={proj.demo} />)}
      </div>
    </div>
  )
}

export default ProjectList
