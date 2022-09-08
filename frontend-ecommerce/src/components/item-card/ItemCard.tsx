import { FunctionComponent } from "react";
import {
  ItemCardStyled,
  CardPlusIcon,
  CardContent,
  CardImage,
  ItemName,
  ItemPrice,
  ItemInfoContainer,
} from "./ItemCard.styled";
import AddItem from '../../assets/icons/AddItem.svg'

interface ItemCardProps {}

const ItemCard: FunctionComponent<ItemCardProps> = () => {
  return (
    <ItemCardStyled>
      <CardImage />
      <CardContent>
        <ItemInfoContainer>
          <ItemName>Dell XPS 15</ItemName>
          <ItemPrice>1200$</ItemPrice>
        </ItemInfoContainer>
        <CardPlusIcon src={AddItem}/>
      </CardContent>
    </ItemCardStyled>
  );
};

export default ItemCard;
