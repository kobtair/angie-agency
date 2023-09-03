import { RefsContext } from "../../contexts/RefsContext";
import { useContext } from "react";

import { AboutContainer } from "./about-us.styles";

export default function AboutUs() {
  const {aboutTitleRef, aboutSliderRef, aboutTitleInView, aboutSliderInView, servicesTitleInView} = useContext(RefsContext)
  return (
    <AboutContainer>
      <div className="title">
        <div className="flex items-end gap-x-3">
        <h2 id='about-title' ref={aboutTitleRef}>ABOUT US</h2>
        <div
            className={`dot relative bottom-2 md:bottom-4 opacity-0 w-5 h-5 rounded-full bg-[#B51A04] ${
               aboutTitleInView && !aboutSliderInView && !servicesTitleInView? "dot-animate" : ""
            }`}
          ></div>
        </div>
      <div className="bar1 ">
        <div id='about-slider' ref={aboutSliderRef} className={`bar2 flex justify-end ${aboutSliderInView?"bar2-animate":""} `}>
        <div
            className={`dot w-5 h-5 opacity-0 rounded-full bg-[#B51A04] ${
              aboutSliderInView && !servicesTitleInView? "dot-animate" : ""
            }`}
          ></div>
        </div>
      </div>
      </div>
      <div className="description">
        <p>
        At Angie Agency, we don't just create brands - we forge emotional
        connections. We believe that behind every business lies a dream, a
        passion, a story waiting to be told. Our journey is about taking your
        dreams and weaving them into captivating digital experiences that leave
        hearts touched and audiences engaged.
        </p>
      </div>
    </AboutContainer>
  );
}
