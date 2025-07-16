import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
        <h1>We Ensure Education For A Better World</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in dynamic field of education</p>
        <button className='btn'>Explore More <img src='/src/assets/dark-arrow.png' alt='' /></button>
        </div>
        
    </div>
  )
}

export default Hero