import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: #0077b6;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 1rem 1rem;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Brand>UrbanCart</Brand>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
