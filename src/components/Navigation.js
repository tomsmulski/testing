import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Play</LinkStyled>
      <LinkStyled to="/history">History</LinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;

const LinkStyled = styled(NavLink)`
  border: 1px solid black;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 8px;
  color: #333;
  background-color: lightgrey;

  &.active {
    background-color: black;
    color: white;
  }
`;
