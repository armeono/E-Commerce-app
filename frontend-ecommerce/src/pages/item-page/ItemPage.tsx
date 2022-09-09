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
} from "./ItemPage.styled";
import Header from "../../components/header/Header";

interface ItemPageProps {}

const ItemPage: FunctionComponent<ItemPageProps> = () => {
  return (
    <ItemPageStyled>
      <Header></Header>
      <ItemPageBody>
        <ItemContainer>
          <MainContent>
            <ImageContainer>
              <MoreImages></MoreImages>
              <MainImage></MainImage>
            </ImageContainer>
            <InfoAndBuy></InfoAndBuy>
          </MainContent>
          <DetailsContainer></DetailsContainer>
        </ItemContainer>
      </ItemPageBody>
    </ItemPageStyled>
  );
};

export default ItemPage;
