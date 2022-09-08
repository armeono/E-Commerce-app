import styled from "styled-components";

export const ItemCardStyled = styled.div`
  position: relative;
  height: 400px;
  width: 32.2%;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 70%;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 30%;
`;

export const ItemName = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.grayText};
  font-weight: 500;
`;

export const ItemPrice = styled.p`
  font-size: 25px;
  color: #000;
  font-weight: 500;
`;

export const CardPlusIcon = styled.img`
  position: absolute;
  height: 35px;
  width: 35px;
  bottom: 5%;
  right: 5%;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: scale(0.98);
  }
`;
export const ItemInfoContainer = styled.div`
  text-align: left;
  padding-left: 15px;
`;
