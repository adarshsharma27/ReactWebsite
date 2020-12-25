import React, { useState } from 'react';
import './App.css';
import Imgcontact from "../src/images/chat.svg";


const Contactus=()=>{
    const[name, setName]=useState('Send');
    const[email, setEmail]=useState("");
    const[emailshow, showEmail]=useState();

    const onsubmits =(event)=>{
        event.preventDefault();
        setName('Success'); 
        showEmail(email);
        
     };


     const getInput =(event)=>{
        setEmail(event.target.value);
       
     }
return(
<>
<div className="contactwrapper">
<div className="" id="contactus">
        <figure>
            <img src={Imgcontact} alt="message icon"/>
        </figure>
      <h2> Let's Keep in touch {emailshow}</h2>
      <p>Our weekly subscribe provides you latest Updates. we promise not to spam you</p>
      <form onSubmit={onsubmits}>
          <input type="email" placeholder="Enter e-mail adress" deafaultvalue="" onChange={getInput} inputMode="email" autoFocus="on" required/>
              <button type="submit">{name}<i className="fas fa-arrow-right"></i></button>
       
      </form>
     
    </div>

</div>

</>



);
}

export default Contactus;

