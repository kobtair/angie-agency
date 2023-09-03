import styled from "styled-components";


export const HeroContainer = styled.div`
  padding-left: 5vw;
  display: flex;
  padding-bottom: 80px;
  @media (max-width: 768px) {
      padding-inline:10px;
  }
`;

export const HeroTextContainer = styled.div`
  padding-top: 100px;

  .sub-text {
    color: #0d0c0a;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .main-text {
    width: 70%;
    color: #0d0c0a;
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: 114px;
    @media (max-width: 768px) {
      margin-top: 40px;
    font-size: 35px;
    line-height: normal;
  }
  }
`;

export const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 1vw;
  z-index: -1;
  height: 600px;
  width: 554px;
  background-color: #b51a04;
  .front {
    position: relative;
    left: -33px;
    width: 95%;
    background-image: url(/src/assets/hero.png);
    background-size: cover;
    height: 95%;
    .card{
        width: 150px;
        position: absolute;
        bottom: -50px;
        right: 100px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
