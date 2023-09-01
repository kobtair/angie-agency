import { ServiceCardContainer } from "./service-card.styles";

export default function ServiceCard({id, title, description }) {

  return (
    <ServiceCardContainer>
      <div className="number">{id}</div>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="description">
        <p>
          {description}
        </p>
      </div>
      <button className="btn"><img src="/src/assets/arrow1.png" alt="arrow" /></button>
    </ServiceCardContainer>
  );
}
