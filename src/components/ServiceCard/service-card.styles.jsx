import styled from "styled-components";

export const ServiceCardContainer = styled.div`
  border-bottom: 1px solid rgba(37, 37, 37, 0.16);
  border-top: 1px solid rgba(37, 37, 37, 0.16);
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .number {
    width: 5%;
    color: #0d0c0a;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .title {
    white-space: nowrap;
    width: 25%;
    color: #0d0c0a;
    font-family: Lato;
    font-size: 44px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .description {
    width: 40%;
    color: #4e4e4e;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 150% */
  }
  .btn{
    
  }
`;
