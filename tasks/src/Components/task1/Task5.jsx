import React from 'react'
import logo from "./images/logo1.jpg"
const Task5 = () => {
  return (
    <>
    <div className="navbar">
         <div className="logo">
             <img src={logo} alt="" />
         </div>
         <div className="menu">
             <ul>
                 <li><a href="">Home</a></li>
                 <li><a href="">brands</a></li>
                 <li><a href="">about</a></li>
                 <li><a href="">Contact</a></li>
             </ul>
         </div>
         <div id="button">
             <button>Submit</button>
         </div>
    </div>
    </>
  )
}
export const Footer=()=>{
    return(
    <footer>
        <div className="footerItems">
        <div id='company'>
            <h1>Company</h1>
            <p>About Us</p>
            <p>Careers</p>
            <p>Management Team</p>
            <p>Board of Diresctors</p>
            <p> Blog</p>
            <p>Contact Us</p>
        </div>
        <div id="Customers">
            <h1>Customers</h1>
            <p>Customer Support</p>
            <p>Local User Group</p>
        </div>
        <div id="partners">
            <h1>Partners</h1>
            <p>All Partner Programs</p>
            <p>Solution Partner Program</p>
            <p>App Partner Program</p>
            <p>Starups</p>
            <p>Affiliate Program</p>
        </div>
        </div>
        <p>&copy;Pradeep R</p>
    </footer>
    );
}

export default Task5
