import { FunctionComponent } from "react";
import {
  CheckoutStyled,
  CheckoutWave,
  CheckoutContent,
  Logo,
  LogoAndArrowContainer,
  Arrow,
  ContentContainer,
  UserInfo,
  ItemAndPaymentInfo,
  SectionName,
  Line,
  InputAndLabelContainer,
  InputLabel,
  InputStyled,
  InputsContainer,
  ItemsContainer,
  PaymentContainer,
  TotalAndShippingContainer,
  TotalPrice,
  Shipping,
  OrderButton,
} from "./Checkout.styled";
import Wave from "../../assets/icons/Wave.svg";
import StoreLogo from "../../assets/icons/Logo.svg";
import BackArrow from "../../assets/icons/LeftArrow.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getAllItemsOfUsers } from "../../services/CartService";
import CartItem from '../../components/cart-item/CartItem';
import Cart from "../../components/cart/Cart";
import {CartItemType} from '../../components/cart/Cart';

interface CheckoutProps {}

const Checkout: FunctionComponent<CheckoutProps> = () => {
  const navigate = useNavigate();

  const userID = useSelector((state: any) => state.id.uniqueID);

  const {data, refetch} = useQuery(['checkout-items'], () => getAllItemsOfUsers(userID));

  const goBack = () => {
    navigate(-1);
  };

  return (
    <CheckoutStyled>
      <CheckoutWave src={Wave} />
      <CheckoutContent>
        <LogoAndArrowContainer>
          <Arrow src={BackArrow} onClick={goBack} />
          <Logo src={StoreLogo} />
        </LogoAndArrowContainer>
        <ContentContainer>
          <UserInfo>
            <SectionName>Order details</SectionName>
            <InputsContainer>
              <InputAndLabelContainer style={{ gridColumn: "span 2" }}>
                <InputLabel>First name</InputLabel>
                <InputStyled />
              </InputAndLabelContainer>

              <InputAndLabelContainer style={{ gridColumn: "span 2" }}>
                <InputLabel>Last name</InputLabel>
                <InputStyled />
              </InputAndLabelContainer>

              <InputAndLabelContainer style={{ gridColumn: "span 4" }}>
                <InputLabel>E-mail</InputLabel>
                <InputStyled />
              </InputAndLabelContainer>

              <InputAndLabelContainer style={{ gridColumn: "span 2" }}>
                <InputLabel>City</InputLabel>
                <InputStyled />
              </InputAndLabelContainer>

              <InputAndLabelContainer style={{ gridColumn: "span 1" }}>
                <InputLabel>Country</InputLabel>
                <InputStyled />
              </InputAndLabelContainer>

              <InputAndLabelContainer style={{ gridColumn: "span 1" }}>
                <InputLabel>Zip Code</InputLabel>
                <InputStyled />
              </InputAndLabelContainer>

              <InputAndLabelContainer style={{ gridColumn: "span 2" }}>
                <InputLabel>Card Number</InputLabel>
                <InputStyled />
              </InputAndLabelContainer>

              <InputAndLabelContainer style={{ gridColumn: "span 1" }}>
                <InputLabel>CVC</InputLabel>
                <InputStyled />
              </InputAndLabelContainer>

              <InputAndLabelContainer style={{ gridColumn: "span 1" }}>
                <InputLabel>Exp Date</InputLabel>
                <InputStyled />
              </InputAndLabelContainer>
            </InputsContainer>
          </UserInfo>
          <Line />
          <ItemAndPaymentInfo>
            <SectionName>Items</SectionName>
            <ItemsContainer>
              {data && data?.data.map((item: CartItemType, index: number) => (
                <CartItem cartItem={item} index={index} refetchItems={refetch}></CartItem>
              ))}
            </ItemsContainer>
            <Line horizontal />
            <PaymentContainer>
              <TotalAndShippingContainer>
                <Shipping>Shipping: 0$</Shipping>
                <TotalPrice>Total: </TotalPrice>
              </TotalAndShippingContainer>
              <OrderButton>Order</OrderButton>
            </PaymentContainer>
          </ItemAndPaymentInfo>
        </ContentContainer>
      </CheckoutContent>
    </CheckoutStyled>
  );
};

export default Checkout;
