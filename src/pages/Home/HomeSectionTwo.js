import React from "react";
import "./Home.scss";
import Arrow2 from "../../assets/home/Arrow-2.svg";
import pointer1 from "../../assets/home/pointer1.svg";
import pointer2 from "../../assets/home/pointer2.svg";
import pointer3 from "../../assets/home/pointer3.svg";
import pointer4 from "../../assets/home/pointer4.svg";

export default function HomeSectionTwo() {
  return (
    <div className="home-section-two bg-grey pb-3 ">
      <div className="container pt-5 p-0">
        <div className="row justify-center gap-5 ">
          <div className="col-12-xs col-6-md ">
            <h1>How we work</h1>
            <p className="text-d-blue mt-2 mb-2 sec-two-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              accusamus commodi repellendus facilis ipsum molestiae est sequi
              illum id inventore!
            </p>
            <div className="display-f">
              <a href="#" className="text-r-blue Arrow">
                <span>Get in touch with us</span>
                <img src={Arrow2} alt="" />
              </a>
            </div>
          </div>

          <div className="col-12-xs col-6-md p-0">
            <div className="display-f gap-5 text-d-blue">
              <div>
                <img src={pointer1} alt="" />
                <h3 className="mt-1">Strategy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis accusamus laboriosam iste numquam voluptatem
                </p>
              </div>
              <div>
                <img src={pointer2} alt="" />
                <h3 className="mt-1">Wireframing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officiis similique quam ab exercitationem dolores tenetur!
                </p>
              </div>
            </div>

            <div className="display-f gap-5">
              <div>
                <img src={pointer3} alt="" />
                <h3 className="mt-1">Design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  quidem error placeat debitis provident repellendus ipsam
                </p>
              </div>
              <div>
                <img src={pointer4} alt="" />
                <h3 className="mt-1">Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  explicabo accusantium laboriosam autem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
