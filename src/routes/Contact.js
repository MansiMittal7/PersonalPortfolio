import React from 'react'
import './Contact.css'
import { BsTelephoneFill} from "react-icons/bs";
import { MdEmail} from "react-icons/md";
import { SiGooglemaps} from "react-icons/si";

export default function Contact() {
  return (
    <div className='cont'>
      
      <div className='abt_heading'> <h1>Contact<span className='text'>Me</span></h1> </div>
      
      <div className='concard'>
       
      <div class="ccard" style={{width: "700px", height: "250px"}}>
      <h5 class="ccard-icon"><BsTelephoneFill/></h5>
      <h6 class="ccard-subtitle">Phone</h6>
      <p class="ccard-text">+91 7999999997</p>
      </div>

      <div class="ccard" style={{width: "700px", height: "250px"}}>
       {/* <h5 lass="ccard-icon"> <a class="ccard-icon" href='mansi27mittal@gmail.com'><MdEmail/></a></h5> */}
      <h5 class="ccard-icon"><MdEmail/></h5>
      <h6 class="ccard-subtitle">Email</h6>
      <p class="ccard-text">mansi27mittal@gmail.com</p>
      </div>

      <div class="ccard" style={{width: "700px", height: "250px"}}>
      <h5 class="ccard-icon"><SiGooglemaps/></h5>
      <h6 class="ccard-subtitle">Address</h6>
      <p class="ccard-text">Indore, India</p>
      </div>

      </div>

      <div className='form'>

      <form>
              <div class="name">
                <input type="text" class="pername" placeholder="Name"/>
              </div>
              <div class="email">
                <input type="email" class="peremail" aria-describedby="emailHelp" placeholder="Email"/>
              </div>
              <div class="phone">
                <input type="Phone Number" class="perphone" placeholder="Contact Number"/>
              </div>
              <div class="msg">
                <input type="text" class="permsg" placeholder="Text Message"/>
              </div>
      
              <div class="cbutton">
              <button>Submit</button>
              </div>

      </form>

      </div>

    </div>
  )
}
