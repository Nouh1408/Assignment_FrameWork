import React from 'react'
import styles from './About.module.css'
import CommonStructure from '../commonStructure/commonStructure'

export default function About() {
  return (
    <div className="container  mt-5">
      <div className='text-center text-light'>
      <h1 className={styles.h1}>ABOUT COMPONENT</h1>
      <CommonStructure/>
      </div>
      <div className="row text-light">
        <div className="col-md-6">
            <p className={styles.text}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6">
            <p className={styles.text}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  )
}
