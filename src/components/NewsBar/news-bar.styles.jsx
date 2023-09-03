import { styled, keyframes } from "styled-components";

const marquee = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const NewsBarContainer = styled.div`
  margin-top: 210px;
  background-color: #0f0f0f;
  height: 160px;
  display: flex;
  align-items: center;
  column-gap: 56px;
  @media (max-width: 768px) {
    height: auto; /* Adjust as needed */
    overflow-x: auto; /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent wrapping of content */
  }
`;
export const HeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 56px;
  animation: ${marquee} 100s linear infinite;
  
`;

export const Headline = styled.div`
  white-space: nowrap;
  font-size: 62px;
  font-weight: 800;
  color: white;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
