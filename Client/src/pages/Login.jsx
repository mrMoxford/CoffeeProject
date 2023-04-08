import React from "react";
import styled from "styled-components";
import LoginBg from "../assets/CoffeeImgs/LoginBg.png";
import { tabletDevice, smallDevice } from "../Responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: black;
  ${smallDevice({ padding: "1rem" })}
`;
const Imagesection = styled.div`
  flex: 1;
  height: 100%;
  background: url(${LoginBg});
  background-repeat: no-repeat;
  background-size: cover;
  ${tabletDevice({ display: "none" })}
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

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  color: white;
  background: hsla(360, 65%, 20%, 1);
  border: none;
  cursor: pointer;
`;
const ALink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Login To Your Account</Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />

          <Button>Log In</Button>
          <ALink>Forgot your password?</ALink>
          <ALink to="/signup">Don't have an account? </ALink>
        </Form>
      </Wrapper>
      <Imagesection></Imagesection>
    </Container>
  );
};

export default Login;
