import { styled, keyframes } from "styled-components";

export const load = keyframes`
  from{
    width: 0;
  }
  to {
    width: 33.7vw ;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  .title {
    background-color: #0f0f0f;
    width: 40%;
    white-space: nowrap;
    height: 30vw;
    display: flex;
    flex-direction: column;
    padding-left: 6vw;
    padding-top: 12vw;
    @media (max-width: 768px) {
      width: 100%;
    }
    h2 {
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
    .bar1 {
      margin-top: 50px;
      border-radius: 20px;
      height: 20px;
      background-color: #0f0f0f;
      width: 85vw;
      @media (max-width: 768px) {
        display: none;
      }
      .bar2 {
        border-radius: 20px;
        height: 20px;
        background-color: white;
        width: 0;
      }
      .bar2-animate {
        animation: ${load} 1s ease;
        animation-fill-mode: forwards;
      }
    }
  }
  .description {
    width: 60%;
    padding: 9vw 6vw 7vw 3vw;
    color: #181818;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    @media (max-width: 768px) {
      width: auto;
    }
  }
`;
