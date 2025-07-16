import React from 'react'
import './Title.css'


// eslint-disable-next-line react/prop-types
function Title({subtitle, title}) {
  return (
    <div className='title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title