import './intro.css';
import Me from "../../img/me.png"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'
import { MdOutlineFacebook } from 'react-icons/md';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className='intro-title'>Hello, my name is </h2>
          <h1 className='intro-name'>The Anh Nguyen.</h1>
          <div className="intro-position">Software Developer</div>
          <p className="intro-desc">
            I am a third-year student in <a href="https://www.tuni.fi/en/about-us/tampere-university" target="_blank" rel="noopener noreferrer">Tampere University</a>, majoring in Information and Communication Technology.
            My focus group is Software, Web & Could engineering. Here are some technologies that I'm capable to work with:
          </p>
          <ul className='intro-skills'>
            <li className='intro-skill-item'>HTML, CSS3, JavaScript, TypeScript</li>
            <li className='intro-skill-item'>NodeJs, ReactJs</li>
            <li className='intro-skill-item'>Python, C++</li>
          </ul>
          <a href='cv-2021.pdf' className='intro-cv' download='cv-The-Anh-Nguyen'>My resume</a>
          <div className="intro-contact">
            <div className="intro-contact-item">
              <a href="https://www.linkedin.com/in/anhnguyen942/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='intro-icon'/>
              </a>
            </div>
            <div className="intro-contact-item">
              <a href="https://www.instagram.com/__justta/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram className='intro-icon'/>
              </a>
            </div>
            <div className="intro-contact-item">
              <a href="https://www.facebook.com/Xoiganktem/" target="_blank" rel="noopener noreferrer">
                <MdOutlineFacebook className='intro-icon'/>
              </a>
            </div>
            <div className="intro-contact-item">
              <a href="https://github.com/cxanng" target="_blank" rel="noopener noreferrer">
                <FaGithub className='intro-icon'/>
              </a>
            </div>
          </div>
          <div className="intro-nav">
            <ul>
              <li className="nav-item">
                <a href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a href="#course-projects">Course Projects</a>
              </li>
              <li className="nav-item">
                <a href="#projects">Pet projects</a>
              </li>
              <li className="nav-item">
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} alt="" className="intro-img" />
      </div>
    </div>
  )
}

export default Intro
