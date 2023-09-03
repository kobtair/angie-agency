import { useState, useEffect } from "react";
import testimonials from "../../data/testimonials.json";

import {
  TestimonialsContainer,
  Carousel,
  ProfileContainer,
  IndicatorsContainer,
} from "./testimonials.styles";

export default function Testimonials() {
  const [selectedSlide, setSelectedSlide] = useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0])
  const handleClick =(e)=>{
    setSelectedSlide(Number(e.target.value))
  }
  useEffect(()=>{
    setCurrentTestimonial(
      testimonials.find((testimonial) => testimonial.id === selectedSlide)
    );
    const timer = setTimeout(() => {
      setSelectedSlide((selectedSlide % testimonials.length) + 1);
    }, 3000);
  
    return () => clearTimeout(timer);

  }, [selectedSlide])
  return (
    <TestimonialsContainer>
      <Carousel>
        
        <h3 className="quote">
          {currentTestimonial.quote}
        </h3>
        <ProfileContainer>
          <div className="profile-pic">
            <img className="max-h-full min-h-full min-w-full max-w-full image" src={currentTestimonial.picture} alt={currentTestimonial.name} />
          </div>
          <div className="profile-text">
            <div className="name">{currentTestimonial.name}</div>
            <div className="role">{currentTestimonial.role}</div>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/src/assets/rating-star.png"
                  alt="rating-star"
                />
              ))}
            </div>
          </div>
        </ProfileContainer>
        <IndicatorsContainer>
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.id}
              onClick={handleClick}
              value={testimonial.id}
              className={`indicator ${
                testimonial.id === selectedSlide ? "selected" : ""
              }`}
            ></button>
          ))}
        </IndicatorsContainer>
      </Carousel>
    </TestimonialsContainer>
  );
}
