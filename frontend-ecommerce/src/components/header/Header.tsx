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
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const navigate = useNavigate();

  const handleClick = () => {

    navigate('/')

  }

  return (
    <HeaderStyled>
      <HeaderBackground>
        <HeaderContent>
          <HeaderLogo src={Logo} onClick={handleClick} />
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
