import React from 'react';

const img1='https://picsum.photos/200/300';
const img2='https://picsum.photos/250/300';
const img3='https://picsum.photos/280/300';
const img4='https://picsum.photos/300/300';
const img5='https://picsum.photos/200/320';
const img6='https://picsum.photos/250/320';
const img7='https://picsum.photos/280/320';
const img8='https://picsum.photos/300/320';
function Imggallery(){
return (
<>
<h2>Our Gallery</h2>
<div class="collection">

    <img src={img1} alt="img1"/>
    <img src={img2} alt="img2"/>
    <img src={img3} alt="img3"/>
    <img src={img4} alt="img3"/>
    </div>
    <div class="collection">

    <img src={img5} alt="img1"/>
    <img src={img6} alt="img2"/>
    <img src={img7} alt="img3"/>
    <img src={img8} alt="img3"/>
    </div>
    
    
</>

);
   

}

 export default Imggallery;


