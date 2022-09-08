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
import KeyboardImage from "../../assets/images/Keyboard.jpg";
import PhoneImage from "../../assets/images/Phone.png";
import CategoryArrow from "../../assets/icons/CategoryArrow.svg";
import LeftArrow from "../../assets/icons/LeftArrow.svg";

interface CategoriesProps {}

const Categories: FunctionComponent<CategoriesProps> = () => {
  const categories = [
    {
      name: "Laptops",
      image: LaptopImage,
    },
    {
      name: "Phones",
      image: PhoneImage,
    },
    {
      name: "Keyboards",
      image: KeyboardImage
    }
  ];

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const arrowClick = () => {
    const item: number = categories
      .map((category) => category.name)
      .indexOf(currentCategory.name);

    setCurrentCategory(categories[item + 1]);
  };

  const leftArrowClick = () => {
    const item: number = categories
      .map((category) => category.name)
      .indexOf(currentCategory.name);

      setCurrentCategory(categories[item - 1]);
  };

  return (
    <CategoriesStyled>
      <CategoriesImage src={currentCategory.image}></CategoriesImage>
      <CategoryName>{currentCategory.name}</CategoryName>

      <CirclesContainer>
        {categories.map((category) => (
          <Circle current={category.name === currentCategory.name} />
        ))}
      </CirclesContainer>
      {currentCategory.name !== "Keyboards" && (
        <ArrowContainer src={CategoryArrow} onClick={arrowClick} />
      )}
      {currentCategory.name !== "Laptops" && (
        <ArrowContainer src={LeftArrow} onClick={leftArrowClick} left={true} />
      )}
    </CategoriesStyled>
  );
};

export default Categories;
