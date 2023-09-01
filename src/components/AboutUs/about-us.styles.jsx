import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;

  .title {
    background-color: #0f0f0f;
    width: 40%;
    white-space: nowrap;
    height: 30vw;
    display: flex;
    flex-direction: column;
    padding-left: 6vw;
    padding-top: 12vw;
    h2 {
      color: #fff;
      font-size: 64px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      text-transform: uppercase;
    }
    .bar1{
        margin-top: 50px;
        border-radius: 20px;
        height: 20px;
        background-color: #0f0f0f;
        width: 85vw;
     .bar2{
        border-radius: 20px;
        height: 20px;
        background-color: white;
        width: 33.7vw
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
  }
`;
