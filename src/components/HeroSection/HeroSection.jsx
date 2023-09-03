import { RefsContext } from "../../contexts/RefsContext";
import { useContext } from "react";

import {
  HeroContainer,
  HeroTextContainer,
  HeroImageContainer,
} from "./hero-section.styles";

export default function HeroSection() {
  const {heroTitleRef, heroTitleInView, aboutTitleInView} = useContext(RefsContext)
  return (
    <HeroContainer>
      <HeroTextContainer>
        <h2 className="sub-text">Welcome to Angie Agency - Where Dreams Take Digital Form</h2>
        <h1 className="main-text whitespace-nowrap">Crafting Connections</h1>
        <div className="flex items-center gap-x-10 md:gap-x-20  "><h1 id="hero-title" ref={heroTitleRef} className=" main-text whitespace-nowrap">Inspiring Growth</h1>
        <div
            className={`dot relative opacity-0 top-6 md:top-5  w-5 h-5 rounded-full bg-[#B51A04] ${
              heroTitleInView && !aboutTitleInView ? "dot-animate" : ""
            }`}
          ></div>
        </div>
      </HeroTextContainer>
      <HeroImageContainer>
        <div className="front">
            <div className="card ">
            <img className="max-h-full max-w-full" src="/src/assets/card.png" alt="card" />
            </div>
        </div>
      </HeroImageContainer>
    </HeroContainer>
  );
}
