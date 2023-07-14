import {React} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import Navbar from './components/Navbar'
import { Route, Routes} from "react-router-dom";


export default function App() {
  return (
    <div>
<Navbar>
<Routes>
        <Route exact path="/" element={ <Home/>}/>
        <Route exact path="/about" element={ <About/>}/>
        <Route exact path="/service" element={ <Services/>}/>
        <Route exact path="/contact" element={ <Contact/>}/>
        <Route exact path="/projects" element={ <Projects/>}/>
      </Routes>
</Navbar>
   
   
    </div>
  )
}
