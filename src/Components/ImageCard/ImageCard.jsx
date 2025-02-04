import React from 'react'
import { FaPlus } from "react-icons/fa6";

export default function ImageCard({image}) { //forgot paranthesitis
  return (
   <>
   
    <div className="col-lg-4 col-md-6">
      <div className="img-card position-relative">
        <img src={image.src} alt="" className='w-100 rounded-3' />
        <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 img-layer">
          <FaPlus className='fs-1 fw-bold '/>
        </div>
      </div>
    </div>
   
   </>
  )
}
