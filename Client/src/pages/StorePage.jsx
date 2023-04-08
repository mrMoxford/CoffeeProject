import styled from "styled-components";
import Products from "../components/Products";
import { tabletDevice, smallDevice } from "../Responsive";
import React from "react";
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StorePage = () => {
  return (
    <Container>
      <Products />
    </Container>
  );
};

export default StorePage;
