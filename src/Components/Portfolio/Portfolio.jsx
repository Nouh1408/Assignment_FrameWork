import React from 'react'
import styles from './Portfolio.module.css'
import house from '../../assets/poert1.png'
import CommonStructure from '../commonStructure/commonStructure'
export default function Portfolio() {
  return (
    <div className='text-center'>
      <h1>PORTFOLIO COMPONENT</h1>
      <CommonStructure/>
      <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <img className={styles.imgSize} src={house} alt="house" />
        </div>
      </div>
      </div>
    </div>
  )
}
