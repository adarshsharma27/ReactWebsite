import React from 'react';

import './App.css';
import Cards from './Cards';
import Imggallery from './Imggallery'
let lastname="sharma"
function Heading() {
  return (
    <>
    <div class="container">
    <h1>{`Adarsh ${lastname} `}{5*5+2}</h1>
    <p>Hello! My name is Adarsh Sharma and I'm a Passionate 
    Front End Developer Like many other people, I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects.</p>
    </div>
    <h2>Our Services</h2>
  <div className="cards">
<Cards  icons="far fa-clipboard"
 title="adarsh@gmail.com"
  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero corrupti ut labore, soluta quaerat"/>
 <Cards  icons="far fa-clock"
 title="91+ 8057979202"
  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero corrupti ut labore, soluta quaerat"/>

 <Cards  icons="far fa-calendar"
 title="2005 Meerut,U.P"
  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero corrupti ut labore, soluta quaerat"/>
  <Cards  icons="fas fa-dollar-sign"
 title="200$"
  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero corrupti ut labore, soluta quaerat"/>
    </div>
    <Imggallery/>
    </>
   
  );
}

export default Heading;
