import styled from "styled-components";

interface MoreImagesType { 
  currentImage?: boolean
}

export const ItemPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ItemPageBody = styled.div`

  width: 100%;
  padding-top: 100px;
`;

export const ItemContainer = styled.div`
  width: 60%;
  height: 650px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  margin: 20px auto;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 65%;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;

  width: 60%;
  height: 100%;
`;

export const MainImage = styled.img`
  padding: 20px;
  width: 75%;
`;

export const MoreImagesContainer = styled.div`
  width: 20%;
  padding-left: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const MoreImages = styled.img<MoreImagesType>`
  width: 100%;
  transform: ${({currentImage}) => currentImage && 'scale(0.85)'};
  opacity:  ${({currentImage}) => currentImage && '0.7'};

  cursor: pointer;

`

export const InfoAndBuy = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  height: 35%;
  padding: 0 20px;
`;

export const DetailsHeader = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

export const ItemName = styled.h1`
  font-size: 35px;
  margin: 0;
  margin-top: 20px;
`;

export const PriceContainer = styled.div`
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
`;

export const Subheader = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grayText};
`;

export const Price = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
`;

export const NamePriceQuantityContainer = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const BuyButton = styled.div`
  height: 40px;
  width: 150px;
  border: none;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
