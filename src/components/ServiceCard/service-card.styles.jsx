import {styled, keyframes} from "styled-components";

 const slideIn = keyframes`
  from{
    transform: translateX(300px) rotate(45deg) ; 
    opacity: 100;
  }
  to{
    transform: translateX(100);
    opacity: 100;
  }
 `

export const ServiceCardContainer = styled.div`
  border-bottom: 1px solid rgba(37, 37, 37, 0.16);
  border-top: 1px solid rgba(37, 37, 37, 0.16);
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding: 10px;
  }

  .number {
    width: 5%;
    color: #0d0c0a;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .title {
    white-space: nowrap;
    width: 25%;
    color: #0d0c0a;
    font-family: Lato;
    font-size: 44px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
     @media (max-width: 1024px) {
     
     font-size: 30px;
  }
  }
  .hover{
    color: #B51A04 ;
  }

  .description {
    width: 40%;
    color: #4e4e4e;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    @media (max-width: 1024px) {
      width: auto;
  }
  }
  .slide-in{
    animation: ${slideIn} 0.3s linear;
    animation-fill-mode: forwards;
  }
`;
