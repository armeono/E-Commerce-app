import styled from "styled-components";

interface InputType {
  width?: string;
}

interface LineType {
  horizontal?: boolean;
}

export const CheckoutStyled = styled.div`
  height: 95vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CheckoutWave = styled.img`
  position: absolute;
  bottom: 0;
`;

export const CheckoutContent = styled.div`
  position: relative;
  height: 80%;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.85;
  border-radius: 4px;
`;

export const LogoAndArrowContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
  width: 100px;
  padding-right: 60px;
  margin: 0 auto;
`;

export const Arrow = styled.img`
  width: 40px;
  height: 50px;
  margin-left: 20px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;

export const UserInfo = styled.div`
  width: 50%;
  height: 80%;
`;
export const ItemAndPaymentInfo = styled.div`
  width: 50%;
  height: 80%;
`;
export const SectionName = styled.h1`
  font-size: 35px;
  font-weight: 600;
  margin-left: 40px;
`;

export const InputStyled = styled.input<InputType>`
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.mainBlue};
  border-radius: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mainBlue};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.mainBlue};
  }

  font-size: 16px;
  font-weight: 500;
  text-indent: 10px;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainBlue};
`;

export const InputsContainer = styled.div`
  margin: 10px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
`;

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  .span2 {
    grid-column: span 2;
  }
`;

export const Line = styled.hr<LineType>`
  height: ${({ horizontal }) => (horizontal ? "" : "90%")};
  width: ${({ horizontal }) => (horizontal ? "90%" : "")};
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 75%;
  overflow-y: auto;
`;

export const PaymentContainer = styled.div`
  height: 20%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TotalAndShippingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Shipping = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.grayText};
  margin: 0;
`;

export const TotalPrice = styled.h1`
  font-size: 35px;
  margin: 0;
`;

export const OrderButton = styled.button`
  height: 70px;
  width: 300px;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-size: 30px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
