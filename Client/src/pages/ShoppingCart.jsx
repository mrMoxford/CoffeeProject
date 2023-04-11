import React, { useEffect } from "react";
import styled from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi";
import { TiDelete } from "react-icons/ti";
import { tabletDevice, smallDevice, mediumDevice } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
const KEY = import.meta.env.VITE_REACT_STRIPE_PUBLIC_KEY;
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
  getTotals,
} from "../Redux/CartSlice";
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
  background: hsla(0, 0%, 85%, 0.5);

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
  align-items: center;
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

const TopButton = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  background: transparent;
  text-decoration: none;
  border: none;
  color: black;
`;

const Bottomsection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Info = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;
const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  place-content: center;

  ${tabletDevice({
    gridTemplateColumns: "repeat(autofit,1fr, minmax(1rem, 2rem))",
    gap: "1rem",
  })};
  ${smallDevice({ flexDirection: "column" })}
`;
const CartItemThumbnail = styled.img`
  width: 5rem;
  aspect-ratio: 1;
`;
const CartItemName = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const CartItemDetails = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
const ClearButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem;
  margin-block: 2rem;
  border: 2px solid hsla(0, 0%, 0%, 0.21);
  background-color: black;
  color: white;
  outline: transparent;
  cursor: pointer;
`;
const Summary = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: hsla(104, 28%, 15%, 1);
  color: white;
  padding: 1rem;
  ${mediumDevice({ width: "100%" })};
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
const CheckoutButton = styled.button`
  padding: 1rem;
  outline: transparent;
  cursor: pointer;
  margin-inline: auto;
  color: white;
  border: 2px solid white;
  background: transparent;
  &:hover {
    background-color: hsla(360, 65%, 20%, 1);
  }
`;
const CartTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  ${tabletDevice({ display: "none" })};
`;
const CartTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 300;
`;
const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Empty = styled.p``;
const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const onToken = token => {};
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleIncrement = item => {
    dispatch(incrementQuantity(item));
  };
  const handleDecrement = item => {
    dispatch(decrementQuantity(item));
  };
  const handleRemove = item => {
    dispatch(removeItem(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartShipping = cart.cartQuantity === 0 ? 0 : cart.shipping;
  const cartDiscount = cart.cartTotal < 10000 ? 0 : cart.discount;

  return (
    <Container>
      <Title>review your items</Title>
      <Wrapper>
        <Sections>
          <Topsection>
            <TopButton to="/store"> ← Back to Store </TopButton>
          </Topsection>

          <Bottomsection>
            {cart.cartQuantity ? (
              <>
                {" "}
                <CartTitleContainer>
                  <CartTitle>Image</CartTitle>
                  <CartTitle>Name</CartTitle>
                  <CartTitle>Size</CartTitle>
                  <CartTitle>Price</CartTitle>
                  <CartTitle>Product Quantity</CartTitle>
                </CartTitleContainer>
                <Info>
                  <Hr />
                  {cart.products.map(item => (
                    <CartItem key={item._id}>
                      <CartItemThumbnail
                        src={item.image}
                        alt={item.name}
                      ></CartItemThumbnail>
                      <CartItemName>{item.name}</CartItemName>
                      <CartItemDetails>
                        100g <i>whole beans</i>
                      </CartItemDetails>

                      <ItemPrice> {item.price * item.quantity} </ItemPrice>
                      <QuantityContainer>
                        <HiMinus
                          onClick={() => handleDecrement(item)}
                          cursor="pointer"
                        />
                        <ItemQuatity>{item.quantity}</ItemQuatity>
                        <HiPlus
                          onClick={() => handleIncrement(item)}
                          cursor="pointer"
                        />
                      </QuantityContainer>
                      <Delete>
                        <TiDelete
                          onClick={() => handleRemove(item)}
                          size={40}
                          cursor="pointer"
                        />
                      </Delete>
                    </CartItem>
                  ))}
                  <Hr />
                </Info>{" "}
              </>
            ) : (
              <Empty> Your cart is empty please start shopping </Empty>
            )}
          </Bottomsection>
          <ClearButton onClick={handleClearCart}>Clear Cart</ClearButton>
        </Sections>
        <Summary>
          <SummurayTitle>Order Summary</SummurayTitle>
          <SummurayItem>
            <SummurayText>Subtotal ({cart.cartQuantity})</SummurayText>
            <SummurayPrice>{`¥${cart.cartTotal}`}</SummurayPrice>
          </SummurayItem>
          <SummurayItem>
            <SummurayText>Shipping</SummurayText>
            <SummurayPrice>{`¥${cartShipping}`}</SummurayPrice>
          </SummurayItem>
          <SummurayItem>
            <SummurayText>Discount</SummurayText>
            <SummurayPrice>{`¥${cartDiscount}`}</SummurayPrice>
          </SummurayItem>
          <SummurayItem type="total">
            <SummurayText>Estimated Total</SummurayText>
            <SummurayPrice>
              {` ¥${cart.cartTotal + cartShipping - cartDiscount}`}
            </SummurayPrice>
          </SummurayItem>
          <StripeCheckout
            style={{ border: "2px solid white" }}
            name="Oddesy_Coffee"
            image="../../public/ODESSY_JAVA.png"
            billingAddress
            shippingAddress
            description={`Your cart total is ¥ ${
              cart.cartTotal + cartShipping - cartDiscount
            }`}
            amount={cart.cartTotal + cartShipping - cartDiscount}
            token={onToken}
            stripeKey={KEY}
          >
            <CheckoutButton>Checkout Now</CheckoutButton>
          </StripeCheckout>
        </Summary>
      </Wrapper>
    </Container>
  );
};

export default ShoppingCart;
