import styled from "styled-components";
import Products from "../components/Products";
import { tabletDevice, smallDevice } from "../Responsive";
import React, { useState } from "react";
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
  const [region, setRegion] = useState(null);
  const handleClick = e => {
    setRegion(e.target.getAttribute("value"));
  };
  return (
    <Container>
      <CatContainer>
        <Cat name="all" onClick={handleClick}>
          All
        </Cat>
        <Cat name="Africa" value="Africa" onClick={handleClick}>
          Africa
        </Cat>
        <Cat name="Asia" value="Asia" onClick={handleClick}>
          Asia
        </Cat>
        <Cat name="South America" value="South America" onClick={handleClick}>
          South America
        </Cat>
      </CatContainer>
      <Products region={region} />
    </Container>
  );
};

export default StorePage;
