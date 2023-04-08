import styled from "styled-components";
import RegionItem from "./RegionItem";
import { regions } from "../assets/data";
import { tabletDevice, smallDevice } from "../Responsive";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: flex-start;
  padding: 2rem 4rem;
  ${smallDevice({ padding: "1rem" })}
`;
const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  ${tabletDevice({ flexDirection: "column" })};
`;
const Title = styled.h2`
  flex: 1;
  font-size: clamp(1rem, 6vw, 3rem);
  margin-bottom: 4rem;
  color: hsla(104, 28%, 15%, 1);
`;
const Regions = () => {
  return (
    <Container id="Explore">
      <Title>Pick a region on the map to start your journey.</Title>
      <Wrapper>
        {regions.map(region => (
          <RegionItem key={region.id} id={region.id} item={region} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Regions;
