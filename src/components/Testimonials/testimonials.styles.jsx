import { styled, keyframes } from "styled-components";

const ease = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12vw;
  height: max-content;
`;
export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .quote {
    color: #0d0c0a;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: -0.72px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  .profile-pic {
    width: 64px;
    aspect-ratio: 1;
    border-radius: 100%;
    .image{
      border-radius: 100%;
    }
  }
  .profile-text {
    .name {
      color: #0d0c0a;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
    }
    .role {
      color: #4e4e4e;
      text-align: center;
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }
  }
  .rating {
    display: flex;
    padding: 10px;
    justify-content: center;
  }
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;

  .indicator {
    width: 10px;
    aspect-ratio: 1;
    border-radius: 100%;
    background-color: #eaeaea;
  }
  .selected {
    background-color: #b51a04;
  }
`;
