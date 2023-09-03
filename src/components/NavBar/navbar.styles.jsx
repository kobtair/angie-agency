import { styled } from "styled-components";


export const NavBarContainer = styled.header`
  padding-inline: 6vw;
  padding-top: 33px;
  display: flex;
  justify-content: space-between;
  `;

  export const LogoContainer = styled.div`
    width: 120px;
  `;
export const NavLinksContainer = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const ContactButton = styled.button`
  display: flex;
  width: 110px;
  color: white;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.4) 1%,
    rgba(255, 255, 255, 0.01) 100%
  );
  border-radius: 40px;
  backdrop-filter: blur(100px);
  border: 1px solid white;
  @media (max-width: 768px) {
    background-color: #B51A04 ;
  }
  
`;
