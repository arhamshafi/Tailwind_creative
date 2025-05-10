import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import LogoSlider from './components/logo_slider'
import Sec_1 from './components/Sec_1'
import Sec_2 from './components/Sec_2'
import Sec_3 from './components/Sec_3'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <LogoSlider/>
      {/* slider essa bnana ha jo continue chalta rhy or jhatka na mary reset hony k liye  */}
      <Sec_1/>
      <Sec_2/>
      <Sec_3/>
      <Footer/>
    </>


  )
}

export default App