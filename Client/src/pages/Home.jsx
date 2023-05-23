import React from "react";
import styled from "styled-components";
import BG from "../assets/videos/bgGif.gif";
import poster from "../assets/videos/bg-photo.png";
import { tabletDevice } from "../Responsive";

const Container = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Content = styled.div`
  position: absolute;
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  z-index: 2;
  pointer-events: none;
  inset: 0;
  ${tabletDevice({
    background: "hsla(0, 0%, 0%, 0.3)",
  })};
`;
const HeaderTitle = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  width: 100%;
  color: white;
  ${tabletDevice({
    fontSize: "3rem",
  })};
`;
const Span = styled.span`
  color: red;
`;
const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
const Img = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;
const Home = () => {
  return (
    <Container>
      <Content>
        <HeaderTitle>
          Let us take your <Span>tastebuds</Span> on a journey of discovery...
        </HeaderTitle>
      </Content>
      <VideoContainer>
        {/* <Video
          poster={poster}
          onMouseOver={e => e.target.play()}
          preload="true"
          muted
        >
          <source src={BG} type="video/mp4" />
        </Video> */}
        <Img src={BG} alt="waterfall in the jungle" />
      </VideoContainer>
    </Container>
  );
};
export default Home;
