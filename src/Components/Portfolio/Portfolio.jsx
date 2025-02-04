import React from 'react'
import styles from './Portfolio.module.css'
import house from '../../assets/poert1.png'
import cake from '../../assets/port2.png'
import carousel from '../../assets/port3.png'
import CommonStructure from '../commonStructure/commonStructure'
import ImageCard from '../ImageCard/ImageCard'
export default function Portfolio() {
  const img = [
    {id:1,src:house,alt:'house'},
    {id:2,src:cake,alt:'cake'},
    {id:3,src:carousel,alt:'carousel'},
    {id:4,src:house,alt:'house'},
    {id:5,src:cake,alt:'cake'},
    {id:6,src:carousel,alt:'carousel'},

  ]
  return (
    <div className='text-center'>
      <h1>PORTFOLIO COMPONENT</h1>
      <CommonStructure/>
      <div className="container mt-4">
      <div className="row gy-4">
      {img.map((image) => <ImageCard key={image.id} image={image} />)}
      </div>
    </div>
    </div>
  )
}
