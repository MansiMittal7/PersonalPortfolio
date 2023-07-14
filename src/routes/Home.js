import React from 'react'
import './Home.css'
import pic from './formalpic.png'
import { FaFacebook,FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa";
// import Typewriter from 'typewriter-effect'



export default function Home() {
  

  // const [state] = useState ({
  //   title: "Hello, Its Mansi Mittal",
  //   titleTwo: "I am a ",
  //   titleThree: "Web Developer"

  // })
  
  return (
    <>
    <div className='home'>
      <div className='home-content'>
      <div class="devpic" > <img src={pic} alt="Mansi Mittal"/></div> 
        <div className='main_heading'>
        <h3>Hello, It's Me</h3>
        </div>
        
        <h1>Mansi Mittal</h1>
        {/* <h3>and I am a<span className='text'></span></h3> */}
        <p>I'm a Web Developer. My expertise is to develop creative Websites.</p>
        
        {/* <h2>
          
          <div className='htitle'>{state.title}</div>
          <div className='htitleTwo'>{state.titleTwo}</div>
          <div className='htitleThree'>{state.titleThree}</div>

        </h2> */}

        {/* <div className='htext'> */}
          {/* <Typewriter
            options={{autoStart: true,
                      loop: true,
                      delay:40,
                      string:[
                        "I am a Web Developer",
                        "I am a Web Designer",
                        "I am a Tech Enthusiast"
                      ],
            }} /> */}
        {/* </div> */}


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
