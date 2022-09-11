import { FunctionComponent } from "react";
import {
  QuantityCounterContainer,
  ImageContainer,
  Number,
  NumberContainer,
} from "./QuantityCounter.styled";
import Plus from "../../../assets/icons/PlusIcon.svg";
import Minus from "../../../assets/icons/MinusIcon.svg";

interface QuantityQounterProps {}

const QuantityCounter: FunctionComponent<QuantityQounterProps> = () => {
  return (
    <QuantityCounterContainer>
      <ImageContainer src={Minus} />
      <NumberContainer>
        <Number>1</Number>
      </NumberContainer>
      <ImageContainer src={Plus} />
    </QuantityCounterContainer>
  );
};

export default QuantityCounter;
