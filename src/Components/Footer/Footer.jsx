import React from 'react'
import styles from './Footer.module.css'
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";



export default function Footer() {
  return (

<footer className={`position-fixed start-0 bottom-0 end-0 text-center ${styles.footerColour}`}>
  <div className="up p-5">
    <div className="row">
      <div className="col-md-4 text-light">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="col-md-4 text-light text-center">
        <h3>AROUND THE WEB</h3>
        <ul className='list-unstyled d-flex justify-content-center fs-1'>
          <li><a href="" className='ms-3 text-light'><CiFacebook /></a></li>
          <li><a href="" className='ms-3 text-light'><FaTwitter /></a></li>
          <li><a href="" className='ms-3 text-light'><FaLinkedin /></a></li>
          <li><a href="" className='ms-3 text-light'><TiWorld /></a></li>
        </ul>
        
      </div>
      <div className="col-md-4 text-light">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
    </div>
  </div>
  <div className={`low p-3 text-light ${styles.lowFooter}`}>
    <p>Copyright © Your Website 2021</p>
  </div>
</footer>
  )
}
