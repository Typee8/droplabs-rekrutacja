import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  display: inline-block;
  margin: 2rem 0;
  padding: 0.75rem 1.5rem;
  background-color: #0077b6;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #005f87;
  }
`;

const BackToHomeBtn: React.FC = () => {
  return <Button to="/">← Back to Home</Button>;
};

export default BackToHomeBtn;
