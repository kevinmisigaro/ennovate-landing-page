import React from "react";
import woman from "../assets/imageg3.jpg";
function HighLightsCard() {
  return (
    <div class="w-full h-72 my-8 flex flex-col md:flex-row items-center justify-normal border border-white ">
      <div>
        <img src={woman} alt="" className="h-60 w-full" />
      </div>
      <div>
        <h2 className="text-white">Alice Johnson</h2>
        <p className="text-white">some really cool description</p>
      </div>
    </div>
  );
}

export default HighLightsCard;
