import { FunctionComponent } from "react";
import { HomeStyled, CategoriesContainer } from "./Home.styled";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import Arrow from '../../assets/icons/CategoryArrow.svg';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <HomeStyled>
      <Header />
      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>
    </HomeStyled>
  );
};

export default Home;
