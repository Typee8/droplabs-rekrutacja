import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  background-color: #0077cc;
  color: white;
  margin-bottom: 40px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005fa3;
  }
`;

const LastViewedProductButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const productID = localStorage.getItem("lastViewedProductID");
    if (productID) {
      navigate(`/product-details/${productID}`);
    } else {
      console.log("No product ID found.");
    }
  };

  const productID = localStorage.getItem("lastViewedProductID");
  if (!productID) return null;

  return (
    <Button onClick={handleClick}> {`← Return to Last Viewed Product`}</Button>
  );
};

export default LastViewedProductButton;
