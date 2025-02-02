
import React from 'react'
import styles from './Home.module.css'
import img_1 from '../../../src/assets/avataaars.png'

export default function Home() {
  return (
  <>
  <div className={`d-flex justify-content-center align-items-center vh-100 ${styles.Home}`}>
    <div>
    <img src={img_1} className={styles.customWidth} alt="home" />
    <h2>START FRAMEWORK</h2>

    </div>
  </div>
  </>
  )
}
