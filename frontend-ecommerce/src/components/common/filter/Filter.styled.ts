import styled from "styled-components";
import SelectArrow from "../../../assets/icons/FilterArrow.svg";

interface FilterType {
  icon: boolean;
}

export const FilterStyled = styled.select<FilterType>`
  height: 40px;
  width: 130px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: white;
  border: none;
  text-indent: 10px;
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  font-size: 20px;
  appearance: none;
  background-image: ${({ icon }) => icon ? `url(${SelectArrow})` : ""};
  background-repeat: no-repeat;
  background-size: 15px;
  background-position: 92%;

`;
