import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./../Sidebar/Sidebar";
import Head from "./../Head/Head";
import Inicio from "./../Inicio/Inicio";
import About from "./../About/About";
import Social from "./../Social/Social";
import Videos from "./../Videos/Video";
import Contact from "./../Contact/Contact";
import Jobs from "./../Jobs/Jobs";
import Know from "./../Conocimientos/Know";
import Experience from "./../Experience/Experience";
import Activities from "./../Activities/Activities";

function App() {
  return (
    <div className="InicioContainer">
     
        <Sidebar />
        <div className="mysection"/>
        <Head />
        <Social />
        <About />
        <Experience />
        <Know />
        <div className="mysection2"/>
        <Jobs />
        {/* <Activities /> */}
        <Contact />
          
     
    </div>
  );
}

export default App;
