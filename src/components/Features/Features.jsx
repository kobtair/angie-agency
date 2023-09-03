import { RefsContext } from "../../contexts/RefsContext";
import { useContext } from "react";

import {
  FeaturesContainer,
  FeaturesTitle,
  FeatureCardsContainer,
} from "./features.styles";
import FeatureCard from "../FeatureCard/FeatureCard";
import features from "../../data/features.json";

export default function Features() {
  const {featuresTitleRef, featuresTitleInView, contactsRef} = useContext(RefsContext)
  const scrollToContact = () => {
    contactsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <FeaturesContainer>
      <div className="flex items-end gap-x-2 ">
      <FeaturesTitle id="features-title" ref={featuresTitleRef}>Why Choose US</FeaturesTitle>
      <div
            className={`dot relative bottom-2 md:bottom-4 w-5 h-5 rounded-full bg-[#B51A04] ${
              featuresTitleInView ? "dot-animate" : ""
            }`}
          ></div>
      </div>
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
          <span className="hover:underline" onClick={scrollToContact}>Contact us</span>
        </div>
      </FeatureCardsContainer>
    </FeaturesContainer>
  );
}
