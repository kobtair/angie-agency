import styled from "styled-components";

export const FeaturesContainer = styled.div`
  background-color: #f7f7f7;
  padding: 6vw;
  .contact-container {
    border: 1px solid #cfcfcf;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    justify-content: center;
    align-items: center;
    color: #0d0c0a;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 125% */
  }
`;

export const FeaturesTitle = styled.h2`
  color: #181818;
  font-family: Lato;
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;

export const FeatureCardsContainer = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;
