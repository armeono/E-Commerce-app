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
import {ItemType} from '../../types/Types';

interface ItemCardProps {
  item: ItemType
}

const ItemCard: FunctionComponent<ItemCardProps> = ({item}) => {

  return (
    <ItemCardStyled>
      <CardImage src={item.images && item.images[0]?.image_url}/>
      <CardContent>
        <ItemInfoContainer>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}$</ItemPrice>
        </ItemInfoContainer>
        <CardPlusIcon src={AddItem}/>
      </CardContent>
    </ItemCardStyled>
  );
};

export default ItemCard;
