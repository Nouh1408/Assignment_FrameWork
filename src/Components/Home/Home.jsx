
import React from 'react'
import styles from './Home.module.css'
import img_1 from '../../../src/assets/avataaars.png'
import CommonStructure from '../commonStructure/commonStructure';


export default function Home() {
  return (
  <>
  <div className=' text-center text-light py-5'>
    <img src={img_1} alt="" className={styles.custImg}/>
    <h1>START FRAMEWORK</h1>
    <CommonStructure/>
    <p>Graphic Artist - Web Designer - Illustrator</p>

  </div>
  </>
  )
}
