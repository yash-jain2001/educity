import React, { useState } from'react'
import Navbar from './components/Navabar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/Video player/VideoPlayer';

function App() {

  const [playState,setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle='OUR PROGRAMS' title='What we offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='GALLERY' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subtitle='CONTACT US' title='Get In Touch' />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App