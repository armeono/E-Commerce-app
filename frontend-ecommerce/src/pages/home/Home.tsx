import { FunctionComponent, useState } from "react";
import {
  HomeStyled,
  CategoriesContainer,
  InputsContainer,
  FiltersContainer,
  HomeBody,
  ItemsContainer,
} from "./Home.styled";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import Search from "../../components/common/search/Search";
import Filter from "../../components/common/filter/Filter";
import ItemCard from "../../components/item-card/ItemCard";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../../services/ItemService";
import { ItemType } from "../../types/Types";
import { changeCartState } from "../../slices/CartSlice";
import { useSelector } from "react-redux";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const sortList = ["Price high", "Price low", "A > Z", "Z > A"];

  const globalCart = useSelector((state: any) => state.CartSliceReducer.cartState)

  const { data } = useQuery(["items"], getAllItems);

  const items = data?.data;

  return (
    <HomeStyled notScrollable={globalCart}>
      <Header />
      <HomeBody >
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
          {items?.map((item: ItemType) => (
            <ItemCard item={item} />
          ))}
        </ItemsContainer>
      </HomeBody>
    </HomeStyled>
  );
};

export default Home;
