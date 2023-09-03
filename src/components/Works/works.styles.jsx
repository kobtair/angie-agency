import styled from "styled-components";

export const WorksContainer = styled.div`
  padding: 6vw;
  background-color: #f7f7f7;
`;

export const WorksTitle = styled.div`
  color: #181818;
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const WorkCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  

  .category {
    border-radius: 40px;
    border: 1px solid #cfcfcf;
    padding: 12px 16px;
    color: #4e4e4e;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    margin-top: 72px;

  }
  .selected{
    border: 1px solid #0D0C0A;
    color: #0D0C0A;
  }
`;

export const WorkCardsContainer = styled.div`
    margin-top: 52px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
