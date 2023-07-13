import React from 'react'
import './Project.css'
import img1 from './WetherApp.png'

export default function Projects() {
  // console.log(img1);
  return (
    <div className='pcards'>
    {/* <img src={img1} style={{width: "300px"}} /> */}
    <section className="info">
</section>
<section className="pcards-wrapper">
  <div className="pcard-grid-space">
    <div className="num">01</div>

    {/* <a 
      className="card" 
      href="https://codetheweb.blog/2017/10/06/html-syntax/" 
      >
    </a> */}
    {/* <img src={pic} alt="Mansi Mittal"/> */}
    {/* style={{width: isOpen ? "350px" : "100px"}} */}
    <a className="pcard" href="https://github.com/MansiMittal7/Weather-App"
      // style={{"--bg-img": img1}}
      style={{"--bg-img": img1}}
    >
      <div>
        <h1>Wether App</h1>
        <p>Web application, fetches data from server using Axios and retrieved data is used to update hooks, to manage the state of React components.Updated hooks trigger re-render of the page, displaying the fetched data to the user.</p>
        <div className="date">26 May 2023</div>
        <div className="tags">
          <div className="tag">GitHub</div>
        </div>
      </div>
    </a>
  </div>
  
</section>

    
    </div>
  )
}
