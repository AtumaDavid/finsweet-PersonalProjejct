import React from "react";
import "./Home.scss";
import Illustration from "../../assets/home/Illustration.svg";
import Arrow from "../../assets/home/Arrow-1.svg";

export default function HomeSectionOne() {
  return (
    <div className="home-section-one bg-tint-blue pb-3">
      <div className="container pt-5 text-white">
        <div className="row justify-center gap-3">
          {/* from xtra small screens, take 12 cols of width */}
          {/* from md screens, take 5 cols of width */}
          <div className="col-12-xs col-6-md">
            <h1 className="">Building steller websites for startups</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              facilis exercitationem totam perspiciatis eius amet sint aperiam!
              Officia, at aperiam!
            </p>
            <div className="display-f mt-4">
              <a href="#" className="btn-yellow text-black ">
                view our work
              </a>

              <a href="#" className="Arrow ml-5">
                <span>view pricing</span>
                <img src={Arrow} alt="" />
              </a>
            </div>
          </div>

          <div className="col-12-xs col-6-md">
            <img src={Illustration} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
