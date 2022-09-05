import { FunctionComponent, useState } from "react";
import {
  CategoriesImage,
  CategoriesStyled,
  CategoryName,
  Circle,
  CirclesContainer,
  ArrowContainer,
} from "./Categories.styled";
import LaptopImage from "../../assets/images/LaptopImage.png";
import CategoryArrow from "../../assets/icons/CategoryArrow.svg";

interface CategoriesProps {}

const Categories: FunctionComponent<CategoriesProps> = () => {
  const categories = [
    {
      name: "Laptops",
      image: LaptopImage,
    },
    {
      name: "Laptops2",
      image: LaptopImage,
    },
    {
      name: "Laptops2",
      image: LaptopImage,
    },
  ];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <CategoriesStyled>
      <CategoriesImage src={currentCategory.image}></CategoriesImage>
      <CategoryName>{currentCategory.name}</CategoryName>

      <CirclesContainer>
        {categories.map((category) => (
          <Circle current={category.name === currentCategory.name}/>
        ))}
      </CirclesContainer>
      <ArrowContainer src={CategoryArrow} />
    </CategoriesStyled>
  );
};

export default Categories;
