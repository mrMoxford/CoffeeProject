import React, { useState } from "react";
import styled from "styled-components";
import SignUpBg from "../assets/CoffeeImgs/SignUpBg.png";
import { tabletDevice, smallDevice } from "../Responsive";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../Redux/apiCalls";
import { signupSuccess, signupFailure, signupStart } from "../Redux/UserSlice";
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
const ALink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
`;
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, isFetching, isSending, error } = useSelector(
    state => state.user
  );
  console.log(user);
  const { name, username, email, password, confirmPassword } = user;
  const handleChange = e => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      // const userData = { name, username, email, password };
      signup(dispatch({ name, username, email, password }));
    }
  };

  return (
    <Container>
      <Imagesection></Imagesection>
      <Wrapper>
        <Title> Create Your Account</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="name"
          />
          <Input
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="username"
          />
          <Input
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
          />
          <Input
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
          />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            placeholder="confirm password"
          />
          <Agreement>
            We collect and use your personal information solely to fulfill your
            orders and provide you with our services, and we do not share your
            information with any third parties, as your privacy is important to
            us.
          </Agreement>
          <Button>Sign Up</Button>
          <ALink to="/login"> Already have an account?</ALink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
