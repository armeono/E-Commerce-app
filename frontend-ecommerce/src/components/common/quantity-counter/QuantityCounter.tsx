import { FunctionComponent, SetStateAction, Dispatch } from "react";
import {
  QuantityCounterContainer,
  ImageContainer,
  Number,
  NumberContainer,
} from "./QuantityCounter.styled";
import Plus from "../../../assets/icons/PlusIcon.svg";
import Minus from "../../../assets/icons/MinusIcon.svg";

interface QuantityQounterProps {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

const QuantityCounter: FunctionComponent<QuantityQounterProps> = ({
  counter,
  setCounter,
}) => {
  const clickMinus = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };

  const clickPlus = () => {
    setCounter(counter + 1);
  };

  return (
    <QuantityCounterContainer>
      <ImageContainer src={Minus} onClick={clickMinus} />
      <NumberContainer>
        <Number>{counter}</Number>
      </NumberContainer>
      <ImageContainer src={Plus} onClick={clickPlus} />
    </QuantityCounterContainer>
  );
};

export default QuantityCounter;
