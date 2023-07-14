import React from 'react'
import './Project.css'
import img1 from './WetherApp.png'

export default function Projects() {
  // console.log(img1);
  return (
    <div className='pcards'>

<div className='abt_heading'> <h1><span className='text'>My </span> Projects</h1> </div>

<div className='flex'>

<section className="pcards-wrapper">
  <div className="pcard-grid-space">
    <div className="num">01</div>
    <a className="pcard" href="https://github.com/MansiMittal7/Tic-Tac-Toe"
      style={{"--bg-img": img1}}
    >
      <div>
        <h1>Tic-Tac-Toe</h1>
        <p>Developed a Tic Tac Toe game using ReactJS, an open-source JavaScript library for building user interfaces. Implemented game logic to determine the winner of the game and handle tie situations using algorithms. Improved the user experience by adding 5+ features such as reset button and customizable game board size</p>
        <div className="date">10 Oct 2022</div>
        <div className="tags">
          <div className="tag">GitHub</div>
        </div>
      </div>
    </a>
  </div> 
</section>

<section className="pcards-wrapper">
  <div className="pcard-grid-space">
    <div className="num">02</div>
    <a className="pcard" href="https://mansimittal7.github.io/"
      style={{"--bg-img": img1}}
    >
      <div>
        <h1>My Epistle</h1>
        <p>Designed an app that saves all writings namely articles, story, and poetry which can perform 5+ operations
such as editing and sorting. Utilized local storage to store data and allow users to access their notes even after closing the app</p>
        <div className="date">2 Nov 2022</div>
        <div className="tags">
          <div className="tag">GitHub</div>
        </div>
      </div>
    </a>
  </div> 
</section>

<section className="pcards-wrapper">
  <div className="pcard-grid-space">
    <div className="num">03</div>

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

<div className='flex2'>

<section className="pcards-wrapper">
  <div className="pcard-grid-space">
    <div className="num">04</div>
    <a className="pcard" href="https://github.com/MansiMittal7/tripmania"
      style={{"--bg-img": img1}}
    >
      <div>
        <h1> Trip Mania</h1>
        <p>Utilized React Routers Dom to create a smooth navigation experience for users, allowing users to easily access 4
        distinct pages within an engaging tourism website.</p>
        <div className="date">01 June 2023</div>
        <div className="tags">
          <div className="tag">GitHub</div>
        </div>
      </div>
    </a>
  </div> 
</section>
  
<section className="pcards-wrapper">
  <div className="pcard-grid-space">
    <div className="num">05</div>
    <a className="pcard" href="https://github.com/MansiMittal7/NewsApp"
      style={{"--bg-img": img1}}
    >
      <div>
        <h1>News App</h1>
        <p>Developed a responsive website that presence news articles in the form of visually applealing cards, featuring custom animations and layouts.</p>
        <div className="date">20 June 2023</div>
        <div className="tags">
          <div className="tag">GitHub</div>
        </div>
      </div>
    </a>
  </div> 
</section>

<section className="pcards-wrapper">
  <div className="pcard-grid-space">
    <div className="num">06</div>
    <a className="pcard" href="https://github.com/MansiMittal7/ReactToDoList"
      style={{"--bg-img": img1}}
    >
      <div>
        <h1>To-Do List</h1>
        <p>Developed a dynamic and responsive Todo list application using React.js, demonstrating proficiency in front-end development and component-based architecture. Implemented essential features such as task creation, editing, deletion, and status tracking. </p>
        <div className="date">28 June 2023</div>
        <div className="tags">
          <div className="tag">GitHub</div>
        </div>
      </div>
    </a>
  </div> 
</section>
</div>


    
    </div>
  )
}
