import styled from "styled-components";

export const HeaderStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const HeaderBackground = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  height: 60px;
  width: 60px;
  cursor: pointer;
`;

export const TextAndCart = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 55px;
`;

export const HeaderText = styled.h2`
  size: 25px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainBlue};

  cursor: pointer;
`;

export const HeaderCart = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

export const CounterBubble = styled.div`
  position: absolute;
  right: -12px;
  top: 8px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.mainBlue};
`;

export const ItemCounter = styled.p`
  font-size: 15px;
  color: white;
  font-weight: 500;
`
