import React from "react";
import styled from "styled-components";
import Ethiopia01 from "../assets/CoffeeImgs/Ethiopia01.png";
import { HiMinus, HiPlus } from "react-icons/hi";
import { tabletDevice, smallDevice } from "../Responsive";
const Product = {
  id: 1,
  Brand: "Barbarossa",
  country: "Ethiopia",
  region: "Africa",
  image: Ethiopia01,
  name: "Sidamo Coffee",
  size: "100g",
  roastLevel: "Light Roast",
  flavourProfile: " Sweet Fruity",
  price: "¥2500",
};
const Container = styled.div`
  padding: 2rem 4rem;
  height: 100%;
  width: 100%;
  display: flex;
  font-weight: 200;
  font-size: 1rem;
  color: black;
  background: white;
  ${smallDevice({ padding: "1rem" })};
`;
const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  ${tabletDevice({ flexDirection: "column-reverse" })};
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: hsla(104, 28%, 15%, 1);
  ${tabletDevice({ marginBottom: "2rem" })};
`;
const ProductInfo = styled.ul`
  display: flex;
  flex: 1;
  background: hsla(0, 0%, 100%, 1);
  margin: 0;
  padding-right: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  ${tabletDevice({ padding: "0" })};
`;
const Selects = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${smallDevice({ flexDirection: "column", alignItems: "flex-start" })};
`;
const Image = styled.img``;
const Name = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 200;
`;
const Brand = styled.li``;
const Region = styled.li``;
const Country = styled.li``;
const RoastLevel = styled.li``;
const FlavourProfile = styled.li`
  margin-bottom: 2rem;
`;
const QuantityContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  ${smallDevice({ marginBottom: "1rem;" })};
`;
const Quatity = styled.p``;

const Price = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  background: white;
  padding: 1rem;
  font-weight: 500;
  font-size: 1rem;
  outline: none;
  border: 1px solid hsla(4, 25%, 13%, 0.2);
  color: hsla(104, 28%, 15%, 1);
  cursor: pointer;
  &:hover {
    background-color: hsla(360, 65%, 20%, 1);
    color: white;
  }
  ${smallDevice({ width: "100%;" })};
`;
const SingleProduct = () => {
  return (
    <Container>
      <Wrapper>
        <ProductInfo>
          <Name>{Product.name}</Name>
          <Brand>
            <b>Brand:</b> {Product.Brand}
          </Brand>
          <Region>
            <b> Region:</b> {Product.region}
          </Region>
          <Country>
            <b>Origin:</b> {Product.country}
          </Country>
          <RoastLevel>
            <b>Roast Level:</b> {Product.roastLevel}
          </RoastLevel>
          <FlavourProfile>
            <b>Flavour Profile:</b> {Product.flavourProfile}
          </FlavourProfile>
          <Selects>
            <QuantityContainer>
              <HiMinus />
              <Quatity>1</Quatity>
              <HiPlus />
              <Price>{Product.price} </Price>
            </QuantityContainer>
            <Button>Add to Basket</Button>
          </Selects>
        </ProductInfo>
        <ImageContainer>
          <Image src={Product.image} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
