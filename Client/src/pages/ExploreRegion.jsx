import React from "react";
import styled from "styled-components";
import { regions } from "../assets/data";
import { tabletDevice, smallDevice } from "../Responsive";
import { useLocation } from "react-router-dom";

const africa = regions[0];
const Container = styled.div`
  padding: 2rem 4rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${smallDevice({ padding: "1rem" })}
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 4rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  ${tabletDevice({ flexDirection: "column" })}
`;
const Image = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsla(104, 28%, 15%, 1);
  & svg {
    max-height: 100%;
    max-width: 100%;
  }
`;

const Info = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const P = styled.p`
  display: flex;
`;
const ExploreRegion = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      <Wrapper>
        <Image>{africa.image}</Image>
        <Info>
          <Title>{africa.title}</Title>
          <P>{africa.info}</P>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default ExploreRegion;
