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
import AddItem from "../../assets/icons/AddItem.svg";
import { ItemType } from "../../types/Types";
import { useNavigate } from "react-router-dom";

interface ItemCardProps {
  item: ItemType;
}

const ItemCard: FunctionComponent<ItemCardProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    navigate(`/item?id=${item.id}`);
  };

  return (
    <ItemCardStyled
      onClick={(e: React.MouseEvent<HTMLElement>) => handleCardClick(e)}
    >
      <CardImage src={item && item.images && item.images[0]?.image_url} />
      <CardContent>
        <ItemInfoContainer>
          <ItemName>{item && item.name}</ItemName>
          <ItemPrice>{item && item.price}$</ItemPrice>
        </ItemInfoContainer>
        <CardPlusIcon src={AddItem} />
      </CardContent>
    </ItemCardStyled>
  );
};

export default ItemCard;
