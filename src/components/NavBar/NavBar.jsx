import { useContext } from "react";
import {
  NavBarContainer,
  LogoContainer,
  NavLinksContainer,
  ContactButton,
} from "./navbar.styles";
import { RefsContext } from "../../contexts/RefsContext";

export default function NavBar() {
  const { contactsRef } = useContext(RefsContext);
  const scrollToContact = () => {
    contactsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavBarContainer>
      <LogoContainer>
        <img
          className=" max-h-full max-w-full"
          src="/src/assets/logo.png"
          alt="logo"
        />
      </LogoContainer>

      <NavLinksContainer>
        <ContactButton onClick={scrollToContact}>Contact Us</ContactButton>
      </NavLinksContainer>
    </NavBarContainer>
  );
}
