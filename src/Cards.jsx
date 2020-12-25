import React from 'react';
import './App.css';


const Cards=(props)=>{
return(
<>
<div className="">
<div className="container-2" >
          <div className="icon icon-1"><i className={props.icons}></i></div>
        <main>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
     
        </main>
    
    </div>
</div>



</>


);


}

export default Cards;