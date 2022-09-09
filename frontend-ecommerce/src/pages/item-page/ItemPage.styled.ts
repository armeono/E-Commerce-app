import styled from "styled-components";

export const ItemPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ItemPageBody = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 100px;
`;

export const ItemContainer = styled.div`
  width: 60%;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  margin: 20px auto;
  border: 1px solid red;

`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 65%;
  width: 100%;

`;

export const ImageContainer = styled.div`
  display: flex;
  border: 1px solid red;
  width: 60%;
  height: 100%;
`;

export const MainImage = styled.img`
    border: 1px solid red;
`;

export const MoreImages = styled.img`
    border: 1px solid blue;
`;

export const InfoAndBuy = styled.div`

  width: 40%;
  height: 100%;
`;

export const DetailsContainer = styled.div`

  width: 100%;
  height: 35%;
`;
