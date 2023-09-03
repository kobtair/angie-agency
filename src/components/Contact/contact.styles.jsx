import { styled, keyframes } from "styled-components";

const slideIn = keyframes`
0%{
  width: 20px;
  height: 20px;
  transform: translateX(-300px);
  opacity: 0;
}
50%{
  opacity: 100;
}
100%{
  transform: translateX(0);
  width: 20px;
  height: 20px;

}
`;
const scale = keyframes`
  0%{
    fill-opacity:0;
    transform: scale(0);
  }
  100%{
    opacity: 100%;
    fill-opacity: 100%;
    transform: scale(1);
  }
`;

export const ContactContainer = styled.div`
  padding-inline: 30px;
  @media (max-width: 768px) {
      padding-inline: 10px;
  }

  .contact-animate {
    animation: ${slideIn} 0.5s ease-in;
  }
  .contact-button-animate {
    animation: ${scale} 1s ease 0.5s;
    animation-fill-mode: forwards;
  }

  .outer-box {
    background-color: #ffcbc3;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    @media (max-width: 768px) {
      padding: 20px 10px;
    }

    .heading {
      color: #0d0c0a;
      font-family: Lato;
      font-size: 44px;
      font-style: normal;
      font-weight: 600;
      line-height: 56px; /* 127.273% */
    }

    .inner-box {
      display: flex;
      row-gap: 56px;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 12px;
      background-color: #b51a04;
      width: 50%;
      padding: 92px 52px;
      @media (max-width: 768px) {
        width: auto;
        padding: 30px 10px; 
        row-gap: 30px;
      }
      .inner-box-text {
        display: flex;
        flex-direction: column;
        row-gap: 28px;
        .inner-box-heading {
          color: #fff;
          font-size: 64px;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
          text-transform: uppercase;
          @media (max-width: 768px) {
            font-size: 40px;
          }
        }
        .inner-box-para {
          color: #fff;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 32px; 
          @media (max-width: 768px) {
      font-size: 16px;
  }
        }
      }
    }
  }
`;

export const ContactButton = styled.button`
  padding: 22px 24px;
  width: 68%;
  opacity: 0;
  background-color: white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  color: #0d0c0a;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; 
  @media (max-width: 768px) {
    width: auto;
    white-space: nowrap;
  }
`;
