import React from 'react'
import Footer from "./../components/Footer";
import NavBar2 from "./../components/NavBar2";
import Img5 from "../assets/blogs/ESEA Norad_All ESOs.png"

function Emea() {
  return (
    <div className="bg-black w-full h-full">
    <NavBar2 />
    <div className="relative">
        <div className="absolute bg-gradient-to-b from-transparent to-[#000000] h-full w-full"></div>
        <img src={Img5} alt="" className="h-full w-full object-cover" />
      </div>
    <div>
        
    </div>
    <Footer />
  </div>
  )
}

export default Emea