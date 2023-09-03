import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding-inline: 6vw;
  
  .bottom-section{
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    color: #646464;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .upper-section {
      padding-block: 40px;
      border-bottom: 1px solid rgba(37, 37, 37, 0.16);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .links {
      width: 50%;
      display: flex;
      justify-content: space-between;
      @media (max-width: 768px) {
     flex-direction: column;
  }
      .link {
        color: #4e4e4e;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 133.333% */
      }
      .connect {
        color: black;
      }
    }

  }
`;
