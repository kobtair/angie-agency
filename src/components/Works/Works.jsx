import { RefsContext } from "../../contexts/RefsContext";
import { useState, useContext } from "react";
import WorkCard from "../WorkCard/WorkCard";
import works from "../../data/works.json";

import {
  WorksContainer,
  WorksTitle,
  WorkCategories,
  WorkCardsContainer,
} from "./works.styles";

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const {worksTitleRef, worksTitleInView} = useContext(RefsContext)
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  const categories = [
    "All",
    "Branding",
    "Design",
    "Social Media",
    "Tech Solutions",
  ];

  return (
    <WorksContainer>
      <div className="flex items-end gap-x-3">
      <WorksTitle ref={worksTitleRef}>Our Work</WorksTitle>
      <div
            className={`dot relative bottom-2  md:bottom-4 w-5 h-5 rounded-full bg-[#B51A04] ${
              worksTitleInView ? "dot-animate" : ""
            }`}
          ></div>
      </div>
      <WorkCategories>
        {categories.map((category) => (
          <button
            onClick={handleClick}
            key={category}
            value={category}
            className={`category ${
              selectedCategory === category ? "selected" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </WorkCategories>
      <WorkCardsContainer>
        {selectedCategory === "All"
          ? works.map((work) => (
              <WorkCard
                key={work.id}
                title={work.title}
                description={work.description}
                icon={work.icon}
                categories={work.categories}
                imageUrl={work.imageUrl}
              />
            ))
          : works
              .filter((work) => work.categories.includes(selectedCategory))
              .map((work) => (
                <WorkCard
                  key={work.id}
                  title={work.title}
                  description={work.description}
                  icon={work.icon}
                  categories={work.categories}
                  imageUrl={work.imageUrl}
                />
              ))}
      </WorkCardsContainer>
    </WorksContainer>
  );
}
