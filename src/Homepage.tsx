import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import LastViewedProductButton from "./LastViewedProductBtn";

// Styled Components
const Page = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem;
  height: 100vh;
  background: linear-gradient(to bottom, #f0f9ff, #cbebff);
  color: #333;
`;

const Header = styled.header`
  text-align: center;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0077b6;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #023e8a;
  margin-bottom: 1rem;
`;

const DestinationList = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const DestinationCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 2rem 0;
  font-size: 0.9rem;
  color: #777;
`;

// Component
const HomePage: React.FC = () => {
  return (
    <Page>
      <Navbar />
      <Header>
        <Title>Wanderlust Travels</Title>
        <Subtitle>Explore the world with unforgettable journeys</Subtitle>
      </Header>

      <Section>
        <LastViewedProductButton />
        <SectionTitle>Popular Destinations</SectionTitle>
        <DestinationList>
          <DestinationCard>
            <h3>Bali, Indonesia</h3>
            <p>Experience tropical paradise and serene temples.</p>
          </DestinationCard>
          <DestinationCard>
            <h3>Paris, France</h3>
            <p>The city of lights, love, and art.</p>
          </DestinationCard>
          <DestinationCard>
            <h3>Kyoto, Japan</h3>
            <p>Discover ancient shrines and cherry blossoms.</p>
          </DestinationCard>
        </DestinationList>
      </Section>

      <Footer>
        &copy; {new Date().getFullYear()} Wanderlust Travels. All rights
        reserved.
      </Footer>
    </Page>
  );
};

export default HomePage;
