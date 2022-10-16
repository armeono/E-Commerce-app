import styled from "styled-components";

interface CircleType {
  current: boolean;
}

interface ArrowType {
  left?: boolean;
}

export const CategoriesStyled = styled.div`
  position: relative;
  margin: 30px 0;
  width: 60%;
  height: 300px;
  box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
`;

export const CategoriesImage = styled.img`
  height: 100%;
  width: 100%;
  box-shadow: 20px 20px 15px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin: 0 auto;
`;

export const CategoryName = styled.h1`
  position: absolute;
  top: -15px;
  left: 20px;
  font-size: 40px;
  font-weight: 600;
  background: ${({ theme }) =>
    `-webkit-linear-gradient(180deg, ${theme.colors.yellow}, ${theme.colors.mainBlue})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CirclesContainer = styled.div`
  position: relative;
  bottom: 35px;

  width: 6%;

  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Circle = styled.div<CircleType>`
  height: 10px;
  width: 10px;

  border-radius: 50%;
  background: ${({ current, theme }) =>
    current ? theme.colors.mainBlue : `transparent`};
  border: 2px solid ${({ theme }) => theme.colors.mainBlue};
`;
export const ArrowContainer = styled.img<ArrowType>`
  position: absolute;
  right: ${({ left }) => (left ? "1090px" : "10px")};
  top: ${({ left }) => (left ? "123px" : "115px")};
  cursor: pointer;
  height: ${({ left }) => (left ? "44px" : "60px")};
  width: ${({ left }) => (left ? "44px" : "60px")};
`;
