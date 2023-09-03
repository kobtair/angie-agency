import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ServiceCardContainer } from "./service-card.styles";

export default function ServiceCard({id, title, description, imageUrl }) {
  const [hover, setHover] = useState(false)
  const handleMouseEnter = ()=>{
    setHover(true)
  }
  const handleMouseLeave = ()=>{
    setHover(false)
  }

  return (
    <ServiceCardContainer  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`number hidden lg:block ${hover?"hover":""}`}>{id}</div>
      <div className={`title flex gap-x-  items-center ${hover?"hover":""}`}>
        <h3 className="flex gap-x-1 items-center">{title}
        <div
            className={`dot mt-3 w-5 h-5 rounded-full bg-[#B51A04] ${
              !hover ? "hidden" : ""
            }`}
          ></div>
        </h3>
        
      </div>
      <div className="description ">
        <p>
          {description}
        </p>
      </div>
      <div className="relative">
     <img className={`z-10 w-96 lg:w-36 rotate-[11deg] lg:rotate-0 lg:opacity-0 ${hover?"slide-in": ""}`}  src={imageUrl} height={150} width={150} alt={title} />
     <img className="absolute hidden lg:block top-1/3 left-1/3 -z-10" src="/src/assets/arrow1.png" alt="" />
     </div>
    </ServiceCardContainer>
  );
}
