import React from "react";
import "./Home.scss";

//images
import picOne from "../../assets/home/sec-3-1.svg";
import picTwo from "../../assets/home/sec-3-1-1.svg";
import Arrow from "../../assets/home/Arrow-3.svg";
import ArrowFour from "../../assets/home/Arrow-4.svg";
import picThree from "../../assets/home/sec-3-2.svg";
import picFour from "../../assets/home/sec-3-2-1.svg";
import picFive from "../../assets/home/sec-3-3.svg";

export default function HomeSectionThree() {
  return (
    <div className="home-section-three bg-white pb-5">
      <div className="container pt-5">
        <div className="row justify-center">
          {/* first grid */}
          <div className="col-12-xs col-9-md">
            <h1 className="pb-3">View our projects</h1>
            <div className="fff">
              <img src={picOne} alt="" className="inner-pic" />
              <img src={picTwo} alt="" className="outter-pic" />
              <div className="overlay-text text-white">
                <h1 className="mb-2">Workhub office Webflow Webflow design</h1>
                <p className="mb-3">
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam
                </p>

                <a href="#" className=" text-yellow Arrow">
                  <span>View project</span>
                  <img src={Arrow} alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* second grid */}
          <div className="col-12-xs col-3-md">
            <a href="#" className="text-d-blue Arrow pb-4 justify-flex-end">
              <span className="text-d-blue">view more</span>
              <img src={ArrowFour} alt="" />
            </a>

            <div className="col-12-xs col-3-md">
              <img src={picThree} alt="" className="inner-pic" />
              <img src={picFour} alt="" className="outter-pic" />
              <div className="text-white overlay-text-two">
                <h1 className="mb-2">Unisaas Website Design</h1>
                <a href="#" className=" text-yellow Arrow">
                  <span>View project</span>
                  <img src={Arrow} alt="" />
                </a>
              </div>
            </div>
            {/* bottom */}
            <div className="sec-grid-btm">
              <img src={picFive} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
