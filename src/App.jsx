
import './App.css';
import About from './component/About';
import Certificate from './component/Certificate';
import Contact from './component/Contact';
import Education from './component/Education';
import Experience from './component/Experience';
import Home from './component/Home';
import Layout from './component/Layout';
import Project from './component/Project';
import Sidebar from './component/Sidebar';
import Techstack from './component/Techstack';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>

    <Layout/>
    <Home/>
    <About/>
    <Techstack/>
    <Education/>
    <Certificate/>
    <Project/>
    <Experience/> 
    <Contact/>
    <ScrollToTop smooth  style={{borderRadius: "30px"}}/>
    </>
      
  );
}

export default App;
