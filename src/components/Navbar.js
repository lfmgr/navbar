import React from 'react'
import './Navbar.css';
import logo from './images/lfbro.png';
import fb from './images/fb.png';
import insta from './images/insta.png';
import hamicon from './images/hamburger_icon.png';
export default function Navbar() {
  return (
    <>
    <header>
    <div className="socialnav">
      <a href="https://www.instagram.com/lf_bro_/" target='_blank' rel='noopener noreferrer'>
        <img src={insta} alt="instagram logo" />
      </a>
      <a href="https://www.facebook.com/l.f.pemi.magar/" target='_blank' rel='noopener noreferrer'>
        <img src={fb} alt="facebook logo" />
      </a>
    </div>
    </header>
    <div className="topnav">
      <a href="/" rel='noopener noreferrer'>
        <img src={logo} alt="text logo with lfbro"/>
      </a>
        <p>Reviews on Flavors and Journeys</p>
    </div>
    <nav>
      <input type='checkbox' id='check' />
      <label htmlFor="check" className='checkbtn'>
        <img src={hamicon} alt="hamburger icon" />
      </label>
      <ul>
        <li><a href="/" rel='noopener noreferrer'>HOME</a></li>
        <li><a href="#" rel='noopener noreferrer'>ABOUT</a></li>
        <li><a href="#" rel='noopener noreferrer'>BLOG</a></li>
        <li><a href="#" rel='noopener noreferrer'>CONTACT</a></li>
      </ul>
    </nav>
    {/* <div className="main"></div> */}
    </>
  );
}

