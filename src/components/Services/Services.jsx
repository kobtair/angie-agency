import ServiceCard from "../ServiceCard/ServiceCard";
import services from "../../data/services.json";

import { ServicesContainer, ServicesTitle } from "./services.styles";

export default function Services() {
  return (
    <ServicesContainer>
      <ServicesTitle>What We’re Good At</ServicesTitle>
      <div className="services-table mt-20">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </ServicesContainer>
  );
}
