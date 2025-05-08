import React, { useEffect } from "react";
import styled from "styled-components";
import BackToHomeBtn from "./BackToHomeBtn";
import Navbar from "./Navbar";
import type { Product } from "./types";
import { useParams } from "react-router-dom";
import { fetchProduct } from "./fetchAPI";
import { useState } from "react";

const Page = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #f0faff, #ffffff);
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #0077b6;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444;
  margin: 1rem 0;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: #023e8a;
  font-weight: bold;
`;

const Category = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  font-size: 1rem;
  color: #f39c12;
`;

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const fetchedProduct = await fetchProduct(id);
        setProduct(fetchedProduct);
      }
    };

    fetchData();
  }, []);

  return product ? (
    <Page>
      <Navbar />
      <BackToHomeBtn />
      <Container>
        <Image src={product.image} alt={product.title} />
        <Info>
          <div>
            <Title>{product.title}</Title>
            <Category>Category: {product.category}</Category>
            <Description>{product.description}</Description>
            <Price>{/* {product.price} */}</Price>
            <Rating>Rating: ⭐ {/* {product.rating} */} / 5</Rating>
          </div>
        </Info>
      </Container>
    </Page>
  ) : (
    "Loading"
  );
};

export default ProductDetails;
