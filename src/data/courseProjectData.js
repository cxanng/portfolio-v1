import courseProjImg1 from '../img/weatherApp.png';
import courseProjImg2 from '../img/webdev1Proj.png';
import courseProjImg3 from '../img/prog3Proj.png';

export const courseProjects = [
  {
    id: 1,
    name: "Weather & Electricity data Applications",
    course: "Software Design",
    desc: "The purpose of this project is to develop an application for monitoring electricity consumption and weather data. The aim is to find the relationship between these two factors, how one affects another at some aspect.",
    techs: ["ReactJs", "ExpressJs", "Mongoose", "Material-UI"],
    img: courseProjImg1,
    github: "https://github.com/cxanng/WeatherApp",
  },
  {
    id: 2,
    name: "Shopping web",
    course: "Web development 1",
    desc: "A simple shopping software application.",
    techs: ["HTML", "CSS", "JavaScript", "MongoDB"],
    img: courseProjImg2,
    github: "https://github.com/cxanng/Shopping_web",
  },
  {
    id: 3,
    name: "LOL: Win you Runeterra",
    course: "Programming 3",
    desc: "A game application implemented based on the base code given by course side using inheritance.",
    techs: ["C++", "Qt"],
    img: courseProjImg3,
    github: "https://github.com/cxanng/Prog3Proj",
  }
]