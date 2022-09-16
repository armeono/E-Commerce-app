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
} from "./Cart.styled";
import Arrow from "../../assets/icons/LeftArrow.svg";
import CartImage from "../../assets/icons/Cart.svg";
import { changeCartState } from "../../slices/CartSlice";
import XIcon from "../../assets/icons/X.svg";
import { useQuery } from "@tanstack/react-query";
import { getAllItemsOfUsers } from "../../services/CartService";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cart-item/CartItem";

interface CartProps {}

export interface CartItemType {
  id: number;
  userId: number;
  itemId: number;
}

const Cart: FunctionComponent<CartProps> = () => {
  const dispatch = useDispatch();

  const userID = useSelector((state: any) => state.id.uniqueID);

  const { data, refetch: refetchItems } = useQuery(["cartItems"], () =>
    getAllItemsOfUsers(Number(userID))
  );

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
          {data &&
            data?.data.map((item: CartItemType, index: number) => (
              <CartItem cartItem={item} index={index} refetchItems={refetchItems}/>
            ))}
        </CartItems>
      </CartStyled>
    </>
  );
};

export default Cart;
