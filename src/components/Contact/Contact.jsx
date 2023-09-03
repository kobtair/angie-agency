import { RefsContext } from "../../contexts/RefsContext";
import { useContext } from "react";
import { ContactContainer, ContactButton } from "./contact.styles";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const {contactsRef} = useContext(RefsContext)
  const {ref:contactDotRef, inView: contactDotInView} = useInView()
  const {ref:contactButtonRef, inView: contactButtonInView} = useInView()
  return (
    <ContactContainer ref={contactsRef}>
      <div className="outer-box">
        <h3 className="heading hidden md:block">
          Let's Elevate Your Brand <br />
          Together
        </h3>
        <div className="inner-box">
          <div className="inner-box-text ">
            <h3 className="inner-box-heading">LET’S TALK</h3>
            <p className="inner-box-para">
              From startups to established businesses, Angie Agency turns
              visions into reality.
            </p>
          </div>
          <div className="flex items-center">
          <div ref={contactDotRef}
            className={`dot hidden md:block relative w-0 h-0 rounded-full bg-[#B51A04] ${
              contactDotInView ? "contact-animate" : ""
            }`}
          ></div>
          <ContactButton ref={contactButtonRef} className={contactButtonInView && "contact-button-animate"}>
            <span>Let's Book a Discovery Call</span>
            <img src="/src/assets/arrow1.png" alt="arrow" height={24} width={24} />
          </ContactButton>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
}
