import React from "react";
import "./Home.scss";

//icons
import iconOne from "../../assets/Icon-1.svg";
import iconTwo from "../../assets/Icon-2.svg";
import iconThree from "../../assets/Icon-3.svg";
import iconFour from "../../assets/Icon-4.svg";
import iconFive from "../../assets/Icon-5.svg";
import iconSix from "../../assets/Icon-6.svg";

export default function HomeSectionFour() {
  return (
    <div className="section-four bg-grey pt-5 pb-3">
      <div className="container">
        {/* header */}
        <div className="text-align-center text-d-blue sec-three-header">
          <h5>Features</h5>
          <h1>Design that solves problems, one product at a time</h1>
        </div>

        {/* cards */}
        <div className="row gap-1">
          <div className="col-12-xs col-6-md col-4-lg">
            <div className="card pt-4 card-style text-d-blue">
              <img src={iconOne} alt="" />
              <h1>Uses Client First</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus eum nihil quis amet iste porro inventore neque,
                officia libero consectetur magnam aspernatur delectus odio ea
                nobis perspiciatis? Quaerat, nobis cupiditate.
              </p>
            </div>
          </div>

          <div className="col-12-xs col-6-md col-4-lg">
            <div className="card pt-4 card-style text-d-blue">
              <img src={iconTwo} alt="" />
              <h1>Uses Client First</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus eum nihil quis amet iste porro inventore neque,
                officia libero consectetur magnam aspernatur delectus odio ea
                nobis perspiciatis? Quaerat, nobis cupiditate.
              </p>
            </div>
          </div>

          <div className="col-12-xs col-6-md col-4-lg">
            <div className="card pt-4 card-style text-d-blue">
              <img src={iconThree} alt="" />
              <h1>Uses Client First</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus eum nihil quis amet iste porro inventore neque,
                officia libero consectetur magnam aspernatur delectus odio ea
                nobis perspiciatis? Quaerat, nobis cupiditate.
              </p>
            </div>
          </div>

          <div className="col-12-xs col-6-md col-4-lg">
            <div className="card pt-4 card-style text-d-blue">
              <img src={iconFour} alt="" />
              <h1>Uses Client First</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus eum nihil quis amet iste porro inventore neque,
                officia libero consectetur magnam aspernatur delectus odio ea
                nobis perspiciatis? Quaerat, nobis cupiditate.
              </p>
            </div>
          </div>

          <div className="col-12-xs col-6-md col-4-lg card-style">
            <div className="card pt-4 card-style text-d-blue">
              <img src={iconFive} alt="" />
              <h1>Uses Client First</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus eum nihil quis amet iste porro inventore neque,
                officia libero consectetur magnam aspernatur delectus odio ea
                nobis perspiciatis? Quaerat, nobis cupiditate.
              </p>
            </div>
          </div>

          <div className="col-12-xs col-6-md col-4-lg">
            <div className="card pt-4 card-style text-d-blue">
              <img src={iconSix} alt="" />
              <h1>Uses Client First</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus eum nihil quis amet iste porro inventore neque,
                officia libero consectetur magnam aspernatur delectus odio ea
                nobis perspiciatis? Quaerat, nobis cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
