import {
  FeaturesContainer,
  FeaturesTitle,
  FeatureCardsContainer,
} from "./features.styles";
import FeatureCard from "../FeatureCard/FeatureCard";
import features from "../../data/features.json";

export default function Features() {
  return (
    <FeaturesContainer>
      <FeaturesTitle>Why Choose US</FeaturesTitle>
      <FeatureCardsContainer>
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
          />
        ))}
        <div className="contact-container">
          <img src="/src/assets/message.png" alt="message" />
          <span>Contact us</span>
        </div>
      </FeatureCardsContainer>
    </FeaturesContainer>
  );
}
