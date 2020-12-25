import React from 'react';
import Cards from './Cards';


const  Services= () =>{
    return (
        <>
        <div className="container service">
        <h1>Additional Services</h1>
        <p contentEditable>Hello! My name is Adarsh Sharma and I'm a Passionate 
        Front End Developer Like many other people, I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects.</p>
        </div>


        <div className="cards">
<Cards  icons="fas fa-envelope-open"
 title="adarsh@gmail.com"
  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero corrupti ut labore, soluta quaerat"/>
 <Cards  icons="fas fa-mobile-alt"
 title="91+ 8057979202"
  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero corrupti ut labore, soluta quaerat"/>

 <Cards  icons="fas fa-user"
 title="Adarsh Sharma"
  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero corrupti ut labore, soluta quaerat"/>
  <Cards  icons="fas fa-map-marked"
 title="200$"
  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto libero corrupti ut labore, soluta quaerat"/>
    </div>

<section class="content">
    <h3>Our Services <span>Description</span></h3>
<p>End-to-end Web Ux/Ui design service to make your online product captivate to your audience </p>
<p>End-to-end Web Development service to make your online presence stand-out from the crowd</p>
<p>End-to-end Websites,Landing pages service launch with Performance optimiztaion, hosting and domain</p> 
<p>End-to-end Web Development support throughout the project cycle completion and launch</p>

</section>
<section class="collections-service">
    <div class="img-collections">
        <img src="https://picsum.photos/110/150" alt="img-1"/>
        <img src="https://picsum.photos/115/150" alt="img-2"/>
        <img src="https://picsum.photos/120/150" alt="img-3"/>
        <img src="https://picsum.photos/130/150" alt="img-4"/>
        <img src="https://picsum.photos/140/150" alt="img-5"/>
      
    </div>
    <div class="img-collections">
    <img src="https://picsum.photos/125/150" alt="img-5"/>
    <img src="https://picsum.photos/135/150" alt="img-5"/>
    <img src="https://picsum.photos/145/150" alt="img-5"/>
    <img src="https://picsum.photos/142/150" alt="img-5"/>
       
    </div>
    <div class="img-collections">
    <img src="https://picsum.photos/122/150" alt="img-5"/>
    <img src="https://picsum.photos/132/150" alt="img-5"/>
    <img src="https://picsum.photos/143/150" alt="img-5"/>
    
       
    </div>
    
</section>

        </>
      );



}

export default Services;