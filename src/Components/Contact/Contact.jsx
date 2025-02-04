import React from 'react'
import styles from './Contact.module.css'
import CommonStructure from '../commonStructure/commonStructure'
export default function Contact() {
  return (
    <div className='text-center'>
    <h1>CONTACT SECTION</h1>
    <CommonStructure/>
    <div className='d-flex justify-content-center'>
    <div className='w-25 bg-light rounded-4'>
    <input type="text" placeholder='username' className='form-control my-2' />
    <input type="number" placeholder='userAge' className='form-control my-2' />
    <input type="email" placeholder='userEmail' className='form-control my-2' />
    <input type="password" placeholder='userPasswrd' className='form-control my-2' />
    <button type='submit' className={`btn btn-outline-dark ${styles.btnCustom} mb-2`}>Send Message</button>
    </div>
    </div>
    </div>
  )
}
