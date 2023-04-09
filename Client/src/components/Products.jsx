import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
const Cart = styled(Link)`
  text-decoration: none;
  color: white;
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
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, [region]);
  return (
    <Container>
      {products.map(item => (
        <Cart to={`/store/${item._id}`} key={item._id}>
          <Product item={item} />
        </Cart>
      ))}
    </Container>
  );
};

export default Products;
