import summit from "../assets/images/summit.png";
import ethica from "../assets/images/ethica.png";
import mosquepay from "../assets/images/mosquepay.png";
import zippyworld from "../assets/images/zippyworld.png";
import cloudvantange from "../assets/images/cloudvantage.png";

import React from "react";
function Slider () {
  return (
    <>
     <div className="">

      <div className="flex">
        <div className="flex ml-20">
          <img src={summit} alt="" className="w-17"/>
          <h1 className="text-gray-600 text-2xl mt-2 ml-1.5">Summit <br />University</h1>
        </div>
        <div className="flex ml-20">
          <img src={ethica} alt="" className=""/>
          <h1 className="text-gray-600 text-2xl mt-5 ml-1.5">EthicaMFB</h1>
        </div>
        <div className="flex ml-20">
          <img src={mosquepay} alt=""/>
          <h1 className="mr-5 text-gray-600 text-2xl mt-5 ml-1.5">
            <span>Mosque</span>
            <span className="font-bold">Pay</span>
          </h1>
        </div>
        <div className="flex ml-20">
           <img src={zippyworld} alt="" />
           <h1 className="font-bold text-gray-600 text-2xl mt-5 ml-3.5">
            Zippyworld
           </h1>
        </div>
        <div className="flex ml-20">
          <img src={cloudvantange} alt="" />
          <h1 className="text-2xl mt-4 ml-3.5">
            <span className="font-bold text-black">
              CLOUD
            </span>
            <span className="text-gray-600 font-light">
              Vantage
            </span>
          </h1>
        </div>
      </div>
     </div>
    </>
  );
};

export default Slider;
