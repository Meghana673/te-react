import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css';

export default function NavBar() {
    return (

<nav  className="navbar navbar-expand-sm navbar fixed-top"  >
      <Link ><img src="/logo1.png"  className="nimg" style={{ height: 70, width: 250,position:"relative",marginTop:-10, }}></img></Link>
    <div className="container-fluid">
        {/* <Link ><img src="/logo1.png" style={{ height: 100, width: 250 }}></img></Link> */}

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="home" aria-current="page">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="care">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">PROJECTS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">OUR BLOG</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">CONTACTS</Link>
          </li>
        </ul>
      </div>
      

 <i class="fa-brands fa-facebook" style={{color:"white",padding:10}}></i>
      <i class="fa-brands fa-google-plus-g" style={{color:"white",padding:10}}></i>
      <i class="fa-brands fa-square-twitter" style={{color:"white",padding:10}}></i>
      <i class="fa-brands fa-pinterest" style={{color:"white",padding:10}}></i>
      <i class="fa-brands fa-linkedin"style={{color:"white",padding:10}}></i>

 </div>
 

  </nav>
      
   );
}