import React from 'react'
import styles from './CommonStructure.module.css'
import { FaStar } from "react-icons/fa6";
export default function CommonStructure() {
  return (
  <div className='d-flex justify-content-center align-items-center  '>
    <div className="line"></div>
    <FaStar className='text-white mx-3'/>
    <div className="line"></div>
  </div>
  )

}
