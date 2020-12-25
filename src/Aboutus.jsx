import React from 'react';
import { NavLink } from 'react-router-dom';



const Aboutus = () =>{
    return (
        <>
        <div className="container about">
        <h1>About Us</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </div>
      <div className="recettes">
        <section class="tab ">
                <h4>About Us Overview</h4>
            
            </section>
        <div className="card">
            <h5>Html5</h5>
            <p>October 20, 2020</p>
            <div className="main-content">
            <figure>
                <img src="https://picsum.photos/1000/400" alt="img-5"/>
            </figure>
            <p>
            Hello! My name is Adarsh Sharma and I'm a Passionate 
    Front End Developer Like many other people, I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects.
            </p>
            <NavLink to="/contactus" className="btn-custom">More</NavLink>
        </div>
    </div>
    <div className="card">
        <h5>Boostrap5</h5>
        <p>October 20, 2020</p>
        <div class="main-content">
        <figure>
            <img src="https://picsum.photos/1000/420" alt="img-5"/>
        </figure>

        <p>
        Hello! My name is Adarsh Sharma and I'm a Passionate 
    Front End Developer Like many other people, I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects.
        </p>
        <NavLink to="/contactus" className="btn-custom">More</NavLink>
    </div>
</div>
<div className="card">
        <h5>Css3</h5>
        <p>October 20, 2020</p>
        <div class="main-content">
        <figure>
            <img src="https://picsum.photos/1000/410" alt="img-5"/>
        </figure>

        <p>
        Hello! My name is Adarsh Sharma and I'm a Passionate 
    Front End Developer Like many other people, I enjoy spending my free time increasing my knowledge of Web Development and building new and challenging projects.
        </p>
        <NavLink to="/contactus" className="btn-custom">More</NavLink>
    </div>
</div>

</div>
        </>
      );



}

export default Aboutus;