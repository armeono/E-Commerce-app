import { FunctionComponent } from "react";
import {
  ItemPageStyled,
  ItemPageBody,
  ItemContainer,
  MainContent,
  ImageContainer,
  MainImage,
  MoreImages,
  InfoAndBuy,
  DetailsContainer,
  ItemName,
  PriceContainer,
  QuantityContainer,
  NamePriceQuantityContainer,
  ButtonContainer,
  BuyButton,
  Subheader,
  Price,
  DetailsHeader,
} from "./ItemPage.styled";
import Header from "../../components/header/Header";
import QuantityCounter from "../../components/common/quantity-counter/QuantityCounter";
import { useQuery } from "@tanstack/react-query";
import { getOneItem } from "../../services/ItemService";
import { useLocation } from "react-router-dom";

interface ItemPageProps {}

const ItemPage: FunctionComponent<ItemPageProps> = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const itemId = queryParams.get("id");

  const { data } = useQuery(["item"], () => itemId && getOneItem(Number(itemId)));


  return (
    <ItemPageStyled>
      <Header></Header>
      <ItemPageBody>
        <ItemContainer>
          <MainContent>
            <ImageContainer>
              <MoreImages></MoreImages>
              <MainImage src={data?.images[0].image_url}></MainImage>
            </ImageContainer>
            <InfoAndBuy>
              <NamePriceQuantityContainer>
                <ItemName>{data?.name}</ItemName>
                <PriceContainer>
                  <Subheader>Price</Subheader>
                  <Price>{data?.price}$</Price>
                </PriceContainer>
                <QuantityContainer>
                  <Subheader>Quantity</Subheader>
                  <QuantityCounter />
                </QuantityContainer>
              </NamePriceQuantityContainer>
              <ButtonContainer>
                <BuyButton>Buy</BuyButton>
              </ButtonContainer>
            </InfoAndBuy>
          </MainContent>
          <DetailsContainer>
            <DetailsHeader>Details</DetailsHeader>
          </DetailsContainer>
        </ItemContainer>
      </ItemPageBody>
    </ItemPageStyled>
  );
};

export default ItemPage;
