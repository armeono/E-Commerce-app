import { FunctionComponent } from "react";
import {
  HeaderStyled,
  HeaderContent,
  TextAndCart,
  HeaderLogo,
  HeaderText,
  HeaderCart,
} from "./Header.styled";
import Logo from "../../assets/icons/Logo.svg";
import Cart from "../../assets/icons/Cart.svg";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <HeaderContent>
        <HeaderLogo src={Logo} />
        <TextAndCart>
          <HeaderText>All Products</HeaderText>
          <HeaderCart src={Cart} />
        </TextAndCart>
      </HeaderContent>
    </HeaderStyled>
  );
};

export default Header;
