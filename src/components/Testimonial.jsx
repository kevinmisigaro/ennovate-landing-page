import React from "react";
import quote from "../assets/quotesmall.webp";
function Testimonial({ name, title, description, img }) {
  return (
    <div className="testimonial-card-dimen">
      <img src={quote} className="animate-pulse"/>
      <h4 className="text-white text-lg text-start line-clamp-5	">{description}</h4>
      <div className="flex flex-row items-center justify-start p-2 mt-2 -ml-8 w-full">
        <img src={img} className="h-16 w-16 rounded-full blur-sm" />
        <div className="w-full flex flex-col items-start pl-4 justify-between">
          <small className="text-yellow-600 text-lg font-poppins m-1 ml-2">{name}</small>
          <h4 className="text-white text-lg -mt-2 ml-2 text-nowrap">{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
