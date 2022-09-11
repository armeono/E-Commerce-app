import styled from "styled-components";

export const QuantityCounterContainer = styled.div`
  margin: 0;
  height: 30px;
  width: 120px;
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.img`
  height: 100%;
  width: 33%;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
  }
`;

export const Number = styled.h1`
  width: 30%;
  margin: 0;
  font-weight: 600;
  font-size: 25px;
`;

export const NumberContainer = styled.div`
  width: 30%;
  margin: 0;
  display: flex;
  flex-direction: row;

  justify-content: center;
`;
