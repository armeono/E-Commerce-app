import { FunctionComponent } from "react";
import {
  CartStyled,
  Overlay,
  CartHeader,
  LineBreak,
  ArrowContainer,
  CartIcon,
  CartWord,
} from "./Cart.styled";
import Arrow from "../../assets/icons/LeftArrow.svg";
import CartImage from "../../assets/icons/Cart.svg";
import { useDispatch } from "react-redux";
import { changeCartState } from "../../slices/CartSlice";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(changeCartState(false));
  };

  return (
    <>
      <Overlay onClick={handleExit} />
      <CartStyled>
        <CartHeader>
          <ArrowContainer src={Arrow} onClick={handleExit} />
          <CartWord>Cart</CartWord>
          <CartIcon src={CartImage} />
        </CartHeader>
        <LineBreak />
      </CartStyled>
    </>
  );
};

export default Cart;
