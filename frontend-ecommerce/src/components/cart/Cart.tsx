import { FunctionComponent } from "react";
import {
  CartStyled,
  Overlay,
  CartHeader,
  LineBreak,
  ArrowContainer,
  CartIcon,
  CartWord,
  CartItems,
  ItemNumber,
  ItemHeader,
  ItemSubheader,
  ItemImage,
  HeadersContainer,
  CartItem,
  X,
  ImageAndHeadersContainer,
  XAndInfoContainer,
} from "./Cart.styled";
import Arrow from "../../assets/icons/LeftArrow.svg";
import CartImage from "../../assets/icons/Cart.svg";
import { useDispatch } from "react-redux";
import { changeCartState } from "../../slices/CartSlice";
import XIcon from "../../assets/icons/X.svg";

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
        <CartItems>
          <CartItem>
            <ImageAndHeadersContainer>
              <ItemNumber>1.</ItemNumber>
              <ItemImage />
              <HeadersContainer>
                <ItemHeader>Lenovo Thinkpad</ItemHeader>
                <ItemSubheader>Laptop</ItemSubheader>
              </HeadersContainer>
            </ImageAndHeadersContainer>

            <XAndInfoContainer>
              <HeadersContainer>
                <ItemHeader>Price: 1200$</ItemHeader>
                <ItemSubheader>Quantity: 1x</ItemSubheader>
              </HeadersContainer>
              <X src={XIcon} />
            </XAndInfoContainer>
          </CartItem>
        </CartItems>
      </CartStyled>
    </>
  );
};

export default Cart;
