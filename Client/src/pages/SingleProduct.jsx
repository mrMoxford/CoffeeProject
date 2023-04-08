import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../reqMethods";
import { tabletDevice, smallDevice } from "../Responsive";
import { useLocation } from "react-router-dom";
import { addToCart } from "../Redux/CartSlice";

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
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addToCart({ ...product }));
  };
  return (
    <Container>
      <Wrapper>
        <ProductInfo>
          <Name>{product.name}</Name>
          <Brand>
            <b>Brand:</b> {product.Brand}
          </Brand>
          <Region>
            <b> Region:</b> {product.region}
          </Region>
          <Country>
            <b>Origin:</b> {product.country}
          </Country>
          <RoastLevel>
            <b>Roast Level:</b> {product.roastLevel}
          </RoastLevel>
          <FlavourProfile>
            <b>Flavour Profile:</b> {product.flavourProfile}
          </FlavourProfile>
          <Selects>
            <QuantityContainer>
              <Price>¥{product.price} </Price>
            </QuantityContainer>
            <Button onClick={handleClick}>Add to Basket</Button>
          </Selects>
        </ProductInfo>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
