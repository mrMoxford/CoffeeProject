import styled from "styled-components";
import { CgCloseO } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { smallDevice, tabletDevice } from "../Responsive";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Container = styled.nav`
  width: 100%;
  padding: 0 4rem;
  position: fixed;
  z-index: 99;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.9px);
  -webkit-backdrop-filter: blur(6.9px);
  ${smallDevice({ padding: "1rem" })}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;
const LeftCol = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 200;
  position: absolue;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  ${smallDevice({ fontSize: "1.5rem" })}
`;
const CenterCol = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tabletDevice({ display: "none" })}
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 0;
  font-size: 1rem;
  text-transform: uppercase;
  list-style: none;
`;

const Nav = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ${smallDevice({ display: "none" })}
`;

const NavOpen = styled.div`
  position: absolute;
  top: 0.7rem;
  right: 4rem;
  display: none;
  justify-content: flex-end;
  align-items: center;
  ${tabletDevice({ display: "flex" })}
  ${smallDevice({ right: "1rem" })}
`;
const NavMenuSmall = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  inset: 0;
  height: 100vh;
  background: hsla(104, 28%, 15%, 1);
`;
const NavClose = styled.div`
  position: absolute;
  top: 0.7rem;
  right: 4rem;
  ${smallDevice({ right: "1rem" })}
`;
const NavLogoContainer = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 4rem;
  ${smallDevice({ left: "1rem" })}
`;
const NavListSmall = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 2rem;
`;

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const quantity = useSelector(state => state.cart.cartQuantity);
  return (
    <Container>
      <Wrapper>
        <LeftCol>
          {" "}
          <Logo to="/">ODESSY_JAVA</Logo>
        </LeftCol>
        <CenterCol>
          <NavList>
            <Nav to="/">Home</Nav>
            <Nav to="/regions">Explore</Nav>
            <Nav to="/Store">Store</Nav>
          </NavList>
        </CenterCol>
        <RightCol>
          <Badge badgeContent={quantity} color="primary">
            <RiShoppingBasket2Line color="white" size={40} />
          </Badge>
          <Nav to="/login">Login</Nav>
          <Nav to="/signup">Signup</Nav>
        </RightCol>
      </Wrapper>
      <NavOpen onClick={() => setMenuToggle(true)}>
        <HiOutlineMenuAlt3 color="white" size={30} />
      </NavOpen>
      {menuToggle && (
        <NavMenuSmall>
          <NavClose onClick={() => setMenuToggle(false)}>
            <CgCloseO color="white" size={30} />
          </NavClose>
          <NavLogoContainer>
            <Logo to="/">ODESSY_JAVA</Logo>
          </NavLogoContainer>
          <NavListSmall>
            <Nav to="/">Home</Nav>
            <Nav to="/regions">Explore</Nav>
            <Nav to="/store">Store</Nav>
            <Badge badgeContent={quantity} color="primary">
              <RiShoppingBasket2Line color="white" size={40} />
            </Badge>

            <Nav to="/login">Login</Nav>
            <Nav to="/signup">Signup</Nav>
          </NavListSmall>
        </NavMenuSmall>
      )}
    </Container>
  );
};

export default NavBar;
