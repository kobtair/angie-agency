import styled from "styled-components";

export const FeatureCardContainer = styled.div`
  padding: 20px 20px 87px 20px;
  background-color: white;
  border-radius: 12px;

  .feature-text {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    .feature-name {
      color: #0d0c0a;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .feature-detail {
      color: #4e4e4e;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 133.333% */
    }
  }
`;

export const FeatureImage = styled.div`
  width: 48px;
  aspect-ratio: 1;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

