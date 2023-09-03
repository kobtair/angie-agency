import styled from "styled-components";

export const WorkCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  .category-container {
    display: flex;
    justify-content: space-between;

    
    .icon {
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f7f7f7;
        border-radius: 4px;
    }
    
    .categories{
        display: flex;
        column-gap: 10px;
        .category {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 6px 12px;
          border-radius: 40px;
          border: 1px solid #cfcfcf;
          color: #4e4e4e;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px; /* 166.667% */
        }
    }
  }
  .text {
    margin-top: 36px;
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    .title {
      color: #0d0c0a;
      font-family: Lato;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .desc {
      color: #4e4e4e;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }
  
`;
