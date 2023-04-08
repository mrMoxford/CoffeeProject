import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../reqMethods";
import Product from "./Product";
import axios from "axios";
// import { products } from "../assets/data";

const Container = styled.div`
  display: grid;
  place-content: center;
  heigth: 100%;
  width: 100%;
  gap: 2rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

const Products = ({ region }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          region
            ? `http://localhost:5000/api/products?region=${region}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [region]);
  return (
    <Container>
      {products.map(item => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
