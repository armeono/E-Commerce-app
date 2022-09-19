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
  PaymentContainer
} from "./Checkout.styled";
import Wave from "../../assets/icons/Wave.svg";
import StoreLogo from "../../assets/icons/Logo.svg";
import BackArrow from "../../assets/icons/LeftArrow.svg";

interface CheckoutProps {}

const Checkout: FunctionComponent<CheckoutProps> = () => {
  return (
    <CheckoutStyled>
      <CheckoutWave src={Wave} />
      <CheckoutContent>
        <LogoAndArrowContainer>
          <Arrow src={BackArrow} />
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
            <ItemsContainer></ItemsContainer>
            <Line horizontal/>
            <PaymentContainer></PaymentContainer>
          </ItemAndPaymentInfo>
        </ContentContainer>
      </CheckoutContent>
    </CheckoutStyled>
  );
};

export default Checkout;
