import React from "react";
import styled from "styled-components";
import Brazil01 from "../assets/CoffeeImgs/Brazil01.png";
import { HiMinus, HiPlus } from "react-icons/hi";
import { TiDelete } from "react-icons/ti";
import { tabletDevice, smallDevice, mediumDevice } from "../Responsive";
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: black;
  font-size: 1.2rem;
  background: hsla(104, 28%, 15%, 0.1);
  ${smallDevice({ padding: "1rem" })};
`;
const Title = styled.h1`
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 200;
  text-transform: uppercase;
  ${smallDevice({ marginBottom: "1rem" })};
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${mediumDevice({ flexDirection: "column" })};
`;
const Sections = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 4rem;
  ${tabletDevice({ margin: "0" })};
`;
const Topsection = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4rem;
`;

const TopButton = styled.button`
  padding: 1rem;
  cursor: pointer;
  background: transparent;
  border: none;
  color: black;
`;

const Bottomsection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Info = styled.div`
  flex: 3;
`;
const CartItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  ${tabletDevice({ flexDirection: "column" })};
`;
const CartItemThumbnail = styled.img`
  width: 5rem;
  aspect-ratio: 1;
`;
const CartItemName = styled.p``;
const CartItemDetails = styled.p``;
const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ItemQuatity = styled.p`
  padding: 0.5rem;
  border-radius: 50%;
`;

const ItemPrice = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;
const Hr = styled.hr`
  background-color: hsla(360, 65%, 20%, 0.1);
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: white;
  padding: 1rem;
`;

const SummurayTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  align-self: flex-start;
`;
const SummurayItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "1.3rem"};
  margin-bottom: ${props => props.type === "total" && "2rem"};
`;
const SummurayText = styled.span``;
const SummurayPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 1rem;
  outline: transparent;
  cursor: pointer;
  border: none;
  color: white;
  background: hsla(360, 65%, 20%, 1);
`;
const ShoppingCart = () => {
  return (
    <Container>
      <Title>review your items</Title>
      <Wrapper>
        <Sections>
          <Topsection>
            <TopButton> ← Continue Shopping </TopButton>
          </Topsection>
          <Bottomsection>
            <Info>
              <CartItems>
                <CartItemThumbnail src={Brazil01} alt="Brazilian Single origin Coffee"></CartItemThumbnail>
                <CartItemName> Brazilian Single Origin Coffee</CartItemName>
                <CartItemDetails>
                  100g <i>whole beans</i>
                </CartItemDetails>
                <QuantityContainer>
                  <ItemPrice> ¥2500 </ItemPrice>

                  <HiMinus cursor="pointer" />
                  <ItemQuatity>1</ItemQuatity>
                  <HiPlus cursor="pointer" />
                </QuantityContainer>
                <TiDelete size={40} cursor="pointer" />
              </CartItems>
              <Hr />
              <CartItems>
                <CartItemThumbnail src={Brazil01} alt="Brazilian Single origin Coffee"></CartItemThumbnail>
                <CartItemName> Brazilian Single Origin Coffee</CartItemName>
                <CartItemDetails>
                  100g <i>whole beans</i>
                </CartItemDetails>
                <QuantityContainer>
                  <ItemPrice> ¥2500 </ItemPrice>
                  <HiMinus cursor="pointer" />
                  <ItemQuatity>1</ItemQuatity>
                  <HiPlus cursor="pointer" />
                </QuantityContainer>
                <TiDelete size={40} cursor="pointer" />
              </CartItems>
              <Hr />
            </Info>
          </Bottomsection>
        </Sections>
        <Summary>
          <SummurayTitle>Order Summary</SummurayTitle>
          <SummurayItem>
            <SummurayText>Subtotal (2 Items)</SummurayText>
            <SummurayPrice>¥5000</SummurayPrice>
          </SummurayItem>
          <SummurayItem>
            <SummurayText>Shipping</SummurayText>
            <SummurayPrice>TBD</SummurayPrice>
          </SummurayItem>
          <SummurayItem>
            <SummurayText>Discount</SummurayText>
            <SummurayPrice>TBD</SummurayPrice>
          </SummurayItem>
          <SummurayItem type="total">
            <SummurayText>Estimated Total</SummurayText>
            <SummurayPrice>¥5000</SummurayPrice>
          </SummurayItem>
          <Button>Checkout Now</Button>
        </Summary>
      </Wrapper>
    </Container>
  );
};

export default ShoppingCart;
