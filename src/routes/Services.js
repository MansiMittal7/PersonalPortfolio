import React from 'react'
import './Service.css'
import { FaCode,FaPaintBrush} from "react-icons/fa";
import { RiComputerFill} from "react-icons/ri";
import { MdAccountTree} from "react-icons/md";

export default function Services() {
  return (
    <div className='ser'>

    <div className='abt_heading'> <h1><span className='text'>My </span> Services</h1> </div>
    <div className='sercards'>
 
    
      <div class="card" style={{width: "500px", height: "300px"}}>
      <p class="card-icon"><RiComputerFill/></p>
      <h6 class="card-subtitle">Web Development</h6>
      <p class="card-text">Some quick example text to build on the card title </p>
      </div>

      <div class="card" style={{width: "500px", height: "300px"}}>
      <p class="card-icon"><FaPaintBrush/></p>
      <h6 class="card-subtitle">Web Designing</h6>
      <p class="card-text">Some quick example text to build on the card title </p>
      </div>

      <div class="card" style={{width: "500px", height: "300px"}}>
      <p class="card-icon"><FaCode/></p>
      <h6 class="card-subtitle">Competetive Coding</h6>
      <p class="card-text">Some quick example text to build on the card title </p>
      </div>

      <div class="card" style={{width: "500px", height: "300px"}}>
      <p class="card-icon"><MdAccountTree/></p>
      <h6 class="card-subtitle">Data Structure & Algorithm</h6>
      <p class="card-text">Some quick example text to build on the card title </p>
      </div>

    </div>

    </div>
  )
}
