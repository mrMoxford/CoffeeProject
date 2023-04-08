import styled from "styled-components";
import Products from "../components/Products";
import { tabletDevice, smallDevice } from "../Responsive";
import React from "react";
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-block: 2rem;
`;
const Cat = styled.p`
  font-size: 2rem;
  color: black;
`;
const StorePage = () => {
  return (
    <Container>
      <CatContainer>
        <Cat>All</Cat>
        <Cat>Africa</Cat>
        <Cat>Asia</Cat>
        <Cat>South America</Cat>
      </CatContainer>
      <Products />
    </Container>
  );
};

export default StorePage;
