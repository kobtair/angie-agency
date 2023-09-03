import { WorkCardContainer } from "./work-card.styles";
import { useState } from "react";

export default function WorkCard({
  title,
  description,
  categories,
  icon,
  imageUrl,
}) {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <WorkCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="category-container">
        <div className="icon">
          <img src={icon} alt={categories} />
        </div>
        <div className="categories">
          {categories.map((category) => (
            <div key={category} className="category">
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="text">
        <h3 className="title flex items-center gap-x-3">
          {title}{" "}
          <div
            className={`dot w-5 h-5 rounded-full bg-[#B51A04] ${
              !hover ? "hidden" : ""
            }`}
          ></div>
        </h3>
        <p className="desc">{description}</p>
      </div>
      <div className="image-container">
        <img className=" min-w-full min-h-full" src={imageUrl} alt={title} />
      </div>
    </WorkCardContainer>
  );
}
