import "./experience.css";
import { experience } from "../../data/experienceData";

const Experience = () => {
  return (
    <div className="experience" id='experience'>
      <h1 className="ex-title">Working experience</h1>
      <div className="ex-item">
        <div className="ex-left">
          <h3 className="ex-company">
            <a href={experience.companyWebsite} target="_blank" rel="noopener noreferrer">
              {experience.company}
            </a>
          </h3>
          <label className="ex-position">
            {experience.position}
          </label>
          <ul className="ex-duration">
            {experience.duration.map(item => {
              return (
                <li className="ex-duration-item" key={`duration-${item.id}`}>
                  {item.startDate} - {item.endDate}: {item.desc}
                </li>
              )
            })}
          </ul>
          <p className="ex-desc">{experience.description}</p>
        </div>
        <div className="ex-right">
          <img className="ex-img" src={experience.companyLogo} alt="Cargotec logo" />
        </div>
      </div>
    </div>
  )
}

export default Experience
