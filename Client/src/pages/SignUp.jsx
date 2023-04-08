import React from "react";
import styled from "styled-components";
import SignUpBg from "../assets/CoffeeImgs/SignUpBg.png";
import { tabletDevice, smallDevice } from "../Responsive";

const Container = styled.div`
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: black;
  ${smallDevice({ padding: "1rem" })};
`;
const Imagesection = styled.div`
  flex: 1;
  height: 100%;
  background: url(${SignUpBg});
  background-repeat: no-repeat;
  background-size: cover;
  ${tabletDevice({ display: "none" })};
`;
const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  background: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  width: 50%;
  ${smallDevice({ width: "100%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  width: 50%;
  ${smallDevice({ width: "100%" })}
`;
const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
`;
const Agreement = styled.span`
  color: hsla(0, 0%, 0%, 0.5);
  font-size: 0.5rem;
`;
const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  color: white;
  background: hsla(104, 28%, 15%, 1);
  border: none;
  cursor: pointer;
`;

const SignUp = () => {
  return (
    <Container>
      <Imagesection></Imagesection>
      <Wrapper>
        <Title> Create Your Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="lastname" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            We collect and use your personal information solely to fulfill your orders and provide you with our services, and we do not share your information with any third parties, as your privacy
            is important to us.
          </Agreement>
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
