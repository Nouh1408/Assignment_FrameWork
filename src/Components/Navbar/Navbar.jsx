import React from 'react'
import styles from './Navbar.module.css'
import {Link,NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
   <nav className={`navbar navbar-expand-lg ${styles.bgnavbar} navbar-dark fixed-top`}>
  <div className="container">
    <Link className={`navbar-brand ${styles.logo}`} to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className={`nav-link ${styles.navBtn}`} aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${styles.navBtn}`} aria-current="page" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${styles.navBtn}`} aria-current="page" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
