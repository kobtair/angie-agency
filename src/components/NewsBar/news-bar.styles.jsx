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
    background-color: #0F0F0F;
    height: 160px;
    display: flex;
    align-items: center;
    column-gap: 56px;
`
export const HeadlineContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 56px;
    animation: ${marquee} 100s linear infinite;
    `

export const Headline = styled.div`
    white-space: nowrap;
    font-size: 62px;
    font-weight: 800;
    color: white;
`
