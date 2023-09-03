import ServiceCard from "../ServiceCard/ServiceCard";
import services from "../../data/services.json";
import { RefsContext } from "../../contexts/RefsContext";
import { useContext } from "react";

import { ServicesContainer, ServicesTitle } from "./services.styles";

export default function Services() {
  const {servicesTitleRef, servicesTitleInView} = useContext(RefsContext)
  return (
    <ServicesContainer>
      <div className="flex items-end relative  -gap-x-20 ">
      <ServicesTitle className=" z-0" id="services-title" ref={servicesTitleRef} >What We’re Good At</ServicesTitle>
      <div
            className={`dot md:relative md:bottom-4 w-5 h-5 opacity-0 absolute right-28 bottom-2 md:right-0 rounded-full bg-[#B51A04] ${
              servicesTitleInView ? "dot-animate" : ""
            }`}
          ></div>
      </div>
      <div className="services-table mt-20">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </ServicesContainer>
  );
}
