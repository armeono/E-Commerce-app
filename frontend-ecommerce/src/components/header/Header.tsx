import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
import CartComponent from "../../components/cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { changeCartState } from "../../slices/CartSlice";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const navigate = useNavigate();

  let currentStateOfCart = false;

  const dispatch = useDispatch();

  const globalCart = useSelector(
    (state: any) => state.CartSliceReducer.cartState
  );

  if (globalCart) {
    currentStateOfCart = globalCart;
  }

  const handleClick = () => {
    navigate("/");
  };

  const cartClick = () => {
    dispatch(changeCartState(true));
  };

  useEffect(() => {
    if (globalCart) {
      currentStateOfCart = globalCart;
    }
  }, [globalCart]);

  return (
    <>
      <HeaderStyled>
        <HeaderBackground>
          <CartComponent />
          <HeaderContent>
            <HeaderLogo src={Logo} onClick={handleClick} />
            <TextAndCart>
              <HeaderText>All Products</HeaderText>
              <HeaderCart src={Cart} onClick={cartClick} />
            </TextAndCart>
          </HeaderContent>
        </HeaderBackground>
      </HeaderStyled>
    </>
  );
};

export default Header;
