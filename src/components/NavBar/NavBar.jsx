import { NavBarContainer, LogoContainer, NavLinksContainer, ContactButton } from "./navbar.styles"

export default function NavBar() {
  return(
   <NavBarContainer>
    <LogoContainer> 
        <img className=" max-h-full max-w-full" src="/src/assets/logo.png" alt="logo" />
    </LogoContainer>

    <NavLinksContainer>
        <ContactButton>
            Contact Us
        </ContactButton>
    </NavLinksContainer>
   

   </NavBarContainer>
  )
}
