import { Dispatch, FunctionComponent, SetStateAction } from "react";
import {
  Item,
  ItemHeader,
  ItemImage,
  ItemNumber,
  ItemSubheader,
  XAndInfoContainer,
  ImageAndHeadersContainer,
  HeadersContainer,
  X,
} from "./CartItem.styled";
import XIcon from "../../assets/icons/X.svg";
import { CartItemType } from "../cart/Cart";
import { useQuery } from "@tanstack/react-query";
import { getOneItem } from "../../services/ItemService";
import { ItemType } from "../../types/Types";
import { removeItemFromCart } from "../../services/CartService";
import { queryClient } from "../../queryClient";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

interface CartItemProps {
  cartItem: CartItemType;
  index: number;
  refetchItems: () => void;
  totalPrice?: number;
  setTotalPrice?: Dispatch<SetStateAction<number | undefined>>;
}

const CartItem: FunctionComponent<CartItemProps> = ({
  cartItem,
  index,
  refetchItems,
  totalPrice,
  setTotalPrice,
}) => {
  const { data } = useQuery(["item", cartItem], () =>
    getOneItem(cartItem.itemId)
  );

  const { mutate } = useMutation(removeItemFromCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cartItems"]);
      setTimeout(() => {
        refetchItems();
      }, 50);
    },
  });

  const removeItem = () => {
    return mutate(cartItem.id);
  };

  useEffect(() => {
    if (data && setTotalPrice) {
      console.log(totalPrice)
      setTotalPrice(() => (totalPrice +=  data?.price));
    }
  }, [data]);

  return (
    <>
      {data && (
        <Item>
          <ImageAndHeadersContainer>
            <ItemNumber>{index + 1}.</ItemNumber>
            <ItemImage src={data.images[0].image_url} />
            <HeadersContainer>
              <ItemHeader>{data.name}</ItemHeader>
              <ItemSubheader>{data.category}</ItemSubheader>
            </HeadersContainer>
          </ImageAndHeadersContainer>
          <XAndInfoContainer>
            <HeadersContainer>
              <ItemHeader>Price: {data.price}$</ItemHeader>
              <ItemSubheader>Quantity: 1x</ItemSubheader>
            </HeadersContainer>
            <X src={XIcon} onClick={removeItem} />
          </XAndInfoContainer>
        </Item>
      )}
    </>
  );
};

export default CartItem;
