import { FunctionComponent } from "react";
import {
  HeaderStyled,
  HeaderContent,
  TextAndCart,
  HeaderLogo,
  HeaderText,
  HeaderCart,
  HeaderBackground,
} from "./Header.styled";
import Logo from "../../assets/icons/Logo.svg";
import Cart from "../../assets/icons/Cart.svg";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <HeaderBackground>
        <HeaderContent>
          <HeaderLogo src={Logo} />
          <TextAndCart>
            <HeaderText>All Products</HeaderText>
            <HeaderCart src={Cart} />
          </TextAndCart>
        </HeaderContent>
      </HeaderBackground>
    </HeaderStyled>
  );
};

export default Header;
