import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from "../src/images/logo-bookmark.svg";

import './App.css';


function Navbar() {



  return (
    <>
   


    <div className="top-btn">
      <i className="fas fa-bars"></i>
    </div>
    <section>
        <header>
          
       <nav id="togl">
            <div className="logo">
                    <img src={Img} alt="logo"/>

                </div>
           <ul>
               
          <li><NavLink exact to="/" activeClassName="active">
               
            <span>Home</span>   
           </NavLink>
        </li>
        <li><NavLink to="/aboutus" activeClassName="active">
                
             <span>About us</span>   
            </NavLink>
         </li>
        <li><NavLink   to="/services" activeClassName="active">
                
             <span>Services</span>   
            </NavLink>
         </li>
         
         <li> <NavLink to="/gallery" id="alast" activeClassName="active">
               
             <span>Gallery</span>   
            </NavLink>
         </li>
         <li> <NavLink to="/contactus" id="alast" activeClassName="active">
               
               <span>Contact Us</span>   
              </NavLink>
           </li>

        
        </ul>
       </nav>
    </header>
    </section>
    </>
  );
}

export default Navbar;
