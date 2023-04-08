import React from "react";
import styled from "styled-components";
import NewsLetter from "./NewsLetter";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { tabletDevice, smallDevice } from "../Responsive";
const Container = styled.div`
  padding: 2rem 4rem;
  width: 100%;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
  background: hsla(104, 28%, 15%, 1);
  ${smallDevice({ padding: "1rem" })};
  ${tabletDevice({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: start;
`;
const Logo = styled.h1`
  text-transform: uppercase;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 200;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SocialLink = styled.a`
  text-decoration: none;
  color: unset;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ODESSY_JAVA</Logo>
        <SocialMedia>
          <SocialLink href="http://www.facebook.com">
            <AiFillFacebook size={"2rem"} />
          </SocialLink>
          <SocialLink href="htttp://www.instagram.com">
            <AiFillInstagram size={"2rem"} />
          </SocialLink>
          <SocialLink href="htttp://www.twitter.com">
            <AiOutlineTwitter size={"2rem"} />
          </SocialLink>
          <SocialLink href="htttp://www.youtube.com">
            <AiFillYoutube size={"2rem"} />
          </SocialLink>
        </SocialMedia>
      </Left>
      <NewsLetter />
    </Container>
  );
};

export default Footer;
