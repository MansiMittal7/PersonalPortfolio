import React from 'react'
import pic from './aboutpic.jpg'
import './About.css'
import { FaHtml5,FaNode,FaBootstrap,FaCss3Alt,FaJs,FaReact,FaCopyright,FaCodeBranch } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import {TbBrandVscode } from "react-icons/tb";

export default function About() {
  return (
    <>
    <div className='abt'>
    <div className='abt_heading'> <h1><span className='text'>About </span> Me</h1> </div>
     
  <div className='abtm'>
    <div class="abtpic" > <img src={pic} alt="Mansi Mittal"/></div> 
    
    <div className='abtcont'>
       <h1>Who Am I...</h1>
       <p className='whoami'> I am pursuing BTech. with major in Information Technology at IIIT Bhopal, passionate about exploring new technologies which demand the best of my technical and analytical skills, and help me broadening and enhancing my current knowledge. My interests lie in domains associated with coding, technology and development. I am dedicated to continuous improvement.</p>
    

          <div className='abtdet'>
            <p><span className='text'>Name:</span> Mansi Mittal</p>
            <p><span className='text'>Age:</span> 21</p>
            <p><span className='text'>Gender:</span> Female</p>
            <p><span className='text'>Languages: </span>English, Hindi, French</p>
            <p><span className='text'>Work:</span> Web Developer</p>
          </div>
          <div class="button">
                <a href="https://drive.google.com/file/d/1d2Ma9G-yyKl64RoDOuqcDkoAObMOzpHG/view?usp=sharing" target="_blank">
                <button>Download CV</button></a>
          </div>
    </div>
    
  </div>
    
  <div className='abt_heading'> <h1><span className='text'>My </span> Skills</h1> </div>
  <div className='cards'>
  
  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><FaCopyright/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>C,C++</p>
     </div>
  </div>

  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><FaHtml5/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>HTML</p>
     </div>
  </div>

  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><FaBootstrap/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>Bootstrap</p>
     </div>
  </div>

  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><FaCss3Alt/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>CSS</p>
     </div>
  </div>

  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><FaJs/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>JS</p>
     </div>
  </div>

  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><FaReact/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>ReactJS</p>
     </div>
  </div>


  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><FaNode/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>NodeJS</p>
     </div>
  </div>

  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><SiMongodb/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>MongoDB</p>
     </div>
  </div>

  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><FaCodeBranch/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>GIT,GitHub</p>
     </div>
  </div>

  <div class='card'>
    <div class='front'>
      <h1 class='abticon'><TbBrandVscode/></h1>
      <hr/>
    </div>
    <div class='back'>  
      <p>VS Code</p>
     </div>
  </div>

  </div>
  {/* my skills end */}

  {/* <div className='abt_heading' id='codingprofile'> <h1>Coding <span className='text'>Profiles</span></h1> </div> */}




  </div>
    </>
  )
}
