import React from 'react'
import './Campus.css'


function Campus() {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src='/src/assets/gallery-1.png' alt=''/>
            <img src='/src/assets/gallery-2.png' alt=''/>
            <img src='/src/assets/gallery-3.png' alt=''/>
            <img src='/src/assets/gallery-4.png' alt=''/>
        </div>
        
        
        
        <button className='btn dark-btn'>See more here <img src='/src/assets/white-arrow.png'/></button>
    </div>
  )
}

export default Campus