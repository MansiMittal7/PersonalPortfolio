import React from 'react'
import './Home.css'
import pic from './formalpic.png'
import { FaFacebook,FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa";

//  let title = document.querySelector({selectors:'.main_heading' });
//  let name= "I am a developer"
//  let index= 1;

//  const typeWriter = () =>{
//      let new_title = name.slice(0,index);
//      title.innerText = new_title;
//      index>name.length ? index=1 : index++;
//      index++;
//      setTimeout( {handler:() => typeWriter(), timeout: 400})
//  }

//  typeWriter();


export default function Home() {

  
  return (
    <>
    <div className='home'>
      <div className='home-content'>
      <div class="devpic" > <img src={pic} alt="Mansi Mittal"/></div> 
        <div className='main_heading'>
        <h3>Hello, It's Me</h3>
        </div>
        
        <h1>Mansi Mittal</h1>
        <h3>and I am a<span className='text'></span></h3>
        <p>I Am A Web Developer For More Than 4 Years. My Expertise Is To Develop And Design Creative Websites And Graphic Designs</p>
      
      <div className='home-sci'>
        <a href='https://www.facebook.com/mansi.mittal.583'><FaFacebook/></a>
        <a href='https://github.com/MansiMittal7'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/mansi7mittal/'><FaLinkedin/></a>
        <a href='https://www.instagram.com/mansi.mittal_/'><FaInstagram/></a>
      </div>


      </div>
    </div>
    </>
  )
}
