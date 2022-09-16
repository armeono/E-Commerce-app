import styled from "styled-components";

export const CartStyled = styled.div`
  position: absolute;
  right: 0;
  width: 28%;
  height: 200vh;
  background-color: ${({ theme }) => theme.colors.white};
  color: #000;
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 200vh;
  cursor: pointer;
`;

export const CartHeader = styled.div`
  height: 40px;
  width: 90%;
  padding: 22px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LineBreak = styled.hr`
  width: 90%;
  margin: 0 auto;
`;

export const ArrowContainer = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export const CartWord = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainBlue};
  flex-basis: 50px;
`;

export const CartIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const CartItems = styled.div`
  width: 100%;
  padding: 15px;
`;


export const HeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

export const CheckoutButton = styled.button`
  height: 50px;
  width: 200px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  margin-right: 25px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`

