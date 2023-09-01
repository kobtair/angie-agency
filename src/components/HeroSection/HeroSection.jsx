import {
  HeroContainer,
  HeroTextContainer,
  HeroImageContainer,
} from "./hero-section.styles";

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <h2 className="sub-text">Welcome to Angie Agency - Where Dreams Take Digital Form</h2>
        <h1 className="main-text whitespace-nowrap">Crafting Connections <br /> Inspiring Growth</h1>
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
