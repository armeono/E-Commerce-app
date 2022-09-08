import { FunctionComponent } from "react";
import {
  HomeStyled,
  CategoriesContainer,
  InputsContainer,
  FiltersContainer,
  HomeBody,
  ItemsContainer
} from "./Home.styled";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import Arrow from "../../assets/icons/CategoryArrow.svg";
import Search from "../../components/common/search/Search";
import Filter from "../../components/common/filter/Filter";
import ItemCard from "../../components/item-card/ItemCard";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const sortList = ["Price high", "Price low", "A > Z", "Z > A"];

  return (
    <HomeStyled>
      <Header />
      <HomeBody>
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <InputsContainer>
          <Search icon />
          <FiltersContainer>
            <Filter placeholder="Filter" />
            <Filter placeholder="Sort by" options={sortList} />
          </FiltersContainer>
        </InputsContainer>

        <ItemsContainer>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
        </ItemsContainer>


      </HomeBody>
    </HomeStyled>
  );
};

export default Home;
