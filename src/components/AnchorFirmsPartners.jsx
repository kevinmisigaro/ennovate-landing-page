import { anchorFirmsLogos } from '@/utils'
import React from 'react'

function AnchorFirmsPartners() {
  return (
    <div class="w-full inline-flex flex-nowrap bg-white py-12 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_1,_white_128px,_white_calc(100%-200px),transparent_100%)]">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
      {anchorFirmsLogos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt=""
          className="h-12 w-[9em] object-contain my-8 sm:h-16 sm:w-[13em] mx-4 md:my-8  xl:scale-125 xl:mx-20 aspect-auto hover:-hue-rotate-15 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
        />
      ))}
    </ul>

    <ul
      class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden="true"
    >
      {anchorFirmsLogos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt=""
          className="h-12 w-[9em] my-8 sm:h-16 sm:w-[13em] mx-4 md:my-8  xl:scale-125 xl:mx-20 aspect-auto hover:-hue-rotate-15 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
        />
      ))}
    </ul>
  </div>
  )
}

export default AnchorFirmsPartners