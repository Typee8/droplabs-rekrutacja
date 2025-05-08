import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Page = styled.div`
  padding: 2rem;
  background: linear-gradient(to bottom, #e0f7fa, #ffffff);
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  color: #0077b6;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h2`
  font-size: 1.2rem;
  color: #023e8a;
  margin: 0.5rem 0;
`;

const Price = styled.p`
  color: #0077b6;
  font-weight: bold;
  font-size: 1rem;
`;

type Product = {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Beach Paradise in Bali",
    imageUrl: "https://source.unsplash.com/400x300/?bali,beach",
    price: "$1,299",
  },
  {
    id: 2,
    title: "Romantic Paris Getaway",
    imageUrl: "https://source.unsplash.com/400x300/?paris,eiffel",
    price: "$1,899",
  },
  {
    id: 3,
    title: "Adventure in the Swiss Alps",
    imageUrl: "https://source.unsplash.com/400x300/?alps,mountains",
    price: "$1,499",
  },
  {
    id: 4,
    title: "Kyoto Cultural Tour",
    imageUrl: "https://source.unsplash.com/400x300/?kyoto,japan",
    price: "$1,199",
  },
  {
    id: 5,
    title: "New York City Explorer",
    imageUrl: "https://source.unsplash.com/400x300/?newyork,city",
    price: "$999",
  },
  {
    id: 6,
    title: "Safari Adventure in Kenya",
    imageUrl: "https://source.unsplash.com/400x300/?safari,africa",
    price: "$2,299",
  },
];

const Products: React.FC = () => {
  return (
    <Page>
      <Navbar />
      <Title>Our Travel Packages</Title>
      <Grid>
        {products.map((product) => (
          <Card key={product.id}>
            <Image src={product.imageUrl} alt={product.title} />
            <Info>
              <ProductTitle>{product.title}</ProductTitle>
              <Price>{product.price}</Price>
            </Info>
          </Card>
        ))}
      </Grid>
    </Page>
  );
};

export default Products;
