import styled from "styled-components";

export const Item = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemHeader = styled.h1`
  margin: 0;
  font-size: 16px;
`;

export const ItemSubheader = styled.p`
  margin: 0;
  font-size: 15px;
`;

export const ItemNumber = styled.h1``;

export const ItemImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
export const X = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.92);
  }
`;

export const ImageAndHeadersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const XAndInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
export const HeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;