import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { products } from "../assets/data";

const Container = styled.div`
  display: grid;
  place-content: center;
  heigth: 100%;
  width: 100%;
  gap: 2rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

const Products = () => {
  return (
    <Container>
      {products.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
