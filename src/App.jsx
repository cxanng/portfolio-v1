import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Experience from "./components/experience/Experience";
import './app.css'
import CourseProjectList from "./components/courseProjectList/CourseProjectList";

const App = () => {
  return (
  <div className="app">
    <Intro />
    <Experience />
    <CourseProjectList />
    <ProjectList />
    <Contact />
  </div>
  );
};

export default App;