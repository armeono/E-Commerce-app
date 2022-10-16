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
  CheckoutButton,
  ButtonContainer,
} from "./Cart.styled";
import Arrow from "../../assets/icons/LeftArrow.svg";
import CartImage from "../../assets/icons/Cart.svg";
import { changeCartState } from "../../slices/CartSlice";
import XIcon from "../../assets/icons/X.svg";
import { useQuery } from "@tanstack/react-query";
import { getAllItemsOfUsers } from "../../services/CartService";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";

interface CartProps {}

export interface CartItemType {
  id: number;
  userId: number;
  itemId: number;
}

const Cart: FunctionComponent<CartProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userID = useSelector((state: any) => state.id.uniqueID);
  const globalCart = useSelector(
    (state: any) => state.CartSliceReducer.cartState
  );

  const { data, refetch: refetchItems } = useQuery(["cartItems"], () =>
    getAllItemsOfUsers(Number(userID))
  );

  const handleExit = () => {
    dispatch(changeCartState(false));
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      {globalCart && <Overlay onClick={handleExit} />}
      <CartStyled cartWidth={globalCart}>
        <CartHeader>
          <ArrowContainer src={Arrow} onClick={handleExit} />
          <CartWord>Cart</CartWord>
          <CartIcon src={CartImage} />
        </CartHeader>
        <LineBreak />
        <CartItems>
          {data &&
            data?.data.map((item: CartItemType, index: number) => (
              <CartItem
                cartItem={item}
                index={index}
                key={index}
                refetchItems={refetchItems}
              />
            ))}
        </CartItems>
        <ButtonContainer cartWidth={globalCart}>
          {data && data.data?.length !== 0 && (
            <CheckoutButton onClick={goToCheckout}>Checkout</CheckoutButton>
          )}
        </ButtonContainer>
      </CartStyled>
    </>
  );
};

export default Cart;
