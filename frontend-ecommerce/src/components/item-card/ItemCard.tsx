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
      <CardImage src="https://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Gear-Dell-XPS-15-OLED-1.webp?alt=media&token=b37e243e-00b8-481c-94fe-31aa3d6e21f3"/>
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
