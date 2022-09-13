import { FunctionComponent } from "react";
import {
  ItemPageStyled,
  ItemPageBody,
  ItemContainer,
  MainContent,
  ImageContainer,
  MainImage,
  MoreImagesContainer,
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
  MoreImages,
  DetailsContent,
  DetailsItem,
} from "./ItemPage.styled";
import Header from "../../components/header/Header";
import QuantityCounter from "../../components/common/quantity-counter/QuantityCounter";
import { useQuery } from "@tanstack/react-query";
import { getOneItem } from "../../services/ItemService";
import { useLocation } from "react-router-dom";
import { ImagesType } from "../../types/Types";
import { useState, useEffect } from "react";

interface ItemPageProps {}

const ItemPage: FunctionComponent<ItemPageProps> = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const itemId = queryParams.get("id");

  const { data } = useQuery(
    ["item"],
    () => itemId && getOneItem(Number(itemId))
  );

  const [currentImage, setCurrentImage] = useState<ImagesType>({
    id: -1,
    image_url: "",
    imageId: -1,
  });
  const [counter, setCounter] = useState(1);

  const handleMoreImagesClick = (image: ImagesType) => {
    setCurrentImage(image);
  };

  const handleBuy = () => {};

  const detailsContent = data?.description.split(",");

  useEffect(() => {
    if (data) {
      setCurrentImage(data.images[0]);
    }
  }, [data]);

  return (
    <ItemPageStyled>
      <Header />
      <ItemPageBody>
        <ItemContainer>
          <MainContent>
            <ImageContainer>
              <MoreImagesContainer>
                {data?.images?.map((image: ImagesType) => (
                  <MoreImages
                    key={image.id}
                    src={image.image_url}
                    currentImage={image?.id !== currentImage?.id}
                    onClick={() => handleMoreImagesClick(image)}
                  />
                ))}
              </MoreImagesContainer>
              {currentImage && <MainImage src={currentImage.image_url} />}
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
                  <QuantityCounter counter={counter} setCounter={setCounter} />
                </QuantityContainer>
              </NamePriceQuantityContainer>
              <ButtonContainer>
                <BuyButton onClick={handleBuy}>Buy</BuyButton>
              </ButtonContainer>
            </InfoAndBuy>
          </MainContent>
          <DetailsContainer>
            <DetailsHeader>Details</DetailsHeader>
            <DetailsContent>
              {detailsContent?.map((item: string) => (
                <DetailsItem>{item}</DetailsItem>
              ))}
            </DetailsContent>
          </DetailsContainer>
        </ItemContainer>
      </ItemPageBody>
    </ItemPageStyled>
  );
};

export default ItemPage;
