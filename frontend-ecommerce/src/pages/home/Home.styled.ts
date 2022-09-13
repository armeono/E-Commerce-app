import styled from "styled-components";

interface HomeType { 
  notScrollable: boolean
}

export const HomeStyled = styled.div<HomeType>`
  width: 100%;
  height: 100vh;
  overflow: ${({notScrollable}) => notScrollable && 'hidden'};

`;

export const HomeBody = styled.div`

  width: 100%;
  height: 150%;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 auto;


`;

export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

export const InputsContainer = styled.div`
  width: 60%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ItemsContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 30px;
  width: 60%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
`;
