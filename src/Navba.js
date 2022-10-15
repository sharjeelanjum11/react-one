
import React, { useState } from "react";
import './navba.css'
// import {BsFacebook,FaFacebookMessenger} from "react-icons/fa";
import logo from './logo.png';
import { AiOutlineMenu} from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";



const Navba = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <div className='nav'>
      <img src={logo} alt="logo" className='logo' />
      <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
     <ul>
      <li> <Link to="/" className="nava" onClick={() => setShowMediaIcons(!showMediaIcons)}>Home</Link></li>
      <li> <Link to="/about" className="nava"onClick={() => setShowMediaIcons(!showMediaIcons)}>Services</Link></li>
      <li> <Link to="/about" className="nava"onClick={() => setShowMediaIcons(!showMediaIcons)}>Blog</Link></li>
      <li> <Link to="/signup" className="nava"onClick={() => setShowMediaIcons(!showMediaIcons)}>Portfolio</Link></li>
      <li> <Link to="/about" className="nava"onClick={() => setShowMediaIcons(!showMediaIcons)}>Contact</Link></li>
      <li> <Link to="/login" className="nava"onClick={() => setShowMediaIcons(!showMediaIcons)}>Login</Link></li>
     </ul>
        </div>
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/multibuild.tech"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/multibuild.tech/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <AiOutlineMenu className="humb"/>
            </a>
          </div>
        </div>
  </div>

    
  </>
  )
}

export default Navba
