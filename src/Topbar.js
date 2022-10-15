import React from 'react'
import './navba.css'
import { GoLocation,GoMail,GoDeviceMobile} from "react-icons/go";
import {BsLinkedin,BsInstagram,BsFacebook,BsWhatsapp,BsTwitter,BsGoogle} from "react-icons/bs";

const Topbar = () => {
  return (
    <div>
      <div className='top-bar'>
        <div className='containerb'>
<div className='left-bar'>
<ul>
          <li> <GoMail/> <a href="#">help@multibuild.tech</a></li>
         <li> <GoDeviceMobile/> <a href="#">+92 320 6566380</a></li>
       <li> <GoLocation/> <a href="#">Faisalabad, Pakistan</a></li>
</ul>
</div>
<div className='right-bar'>
<ul>
    <li><a href="#" target="_build"><BsFacebook className='fb'/></a></li>
    <li><a href="#" target="_build"><BsInstagram className='ins'/></a></li>
    <li><a href="#" target="_build"><BsTwitter className='tw'/></a></li>
    <li><a href="#" target="_build"><BsGoogle className='gg'/></a></li>
    <li><a href="#" target="_build"><BsLinkedin className='ld'/></a></li>
    <li><a href="#" target="_build"><BsWhatsapp className='wa'/></a></li>
    <li><a href="#" target="_build" className='quote'>Have A project?</a></li>
</ul>
</div>
</div>
      </div>
    </div>
  )
}

export default Topbar
