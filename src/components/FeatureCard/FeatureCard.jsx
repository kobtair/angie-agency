import { FeatureCardContainer, FeatureImage } from "./feature-card.styles";

export default function FeatureCard({title, description, imageUrl}) {
  return (
    <FeatureCardContainer>
      <FeatureImage>
        <img src={imageUrl} alt={title} />
      </FeatureImage>
      <div className="feature-text">
        <h3 className="feature-name">{title}</h3>
        <p className="feature-detail">
          {description}
        </p>
      </div>
    </FeatureCardContainer>
  );
}
