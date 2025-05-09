import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import LastViewedProductButton from "./LastViewedProductBtn";

const Page = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0 2rem 2rem 2rem;
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
  bottom: 5px;
  text-align: center;
  width: 100vw;
  padding: 2rem 0;
  font-size: 0.9rem;
  color: #777;
`;

const HomePage: React.FC = () => {
  return (
    <Page>
      <Navbar />
      <Header>
        <Title>UrbanCart</Title>
        <Subtitle>
          Your one-stop shop for fashion, tech, and lifestyle essentials
        </Subtitle>
      </Header>

      <Section>
        <LastViewedProductButton />
        <SectionTitle>Popular Picks</SectionTitle>
        <DestinationList>
          <DestinationCard>
            <h3>Stylish Apparel</h3>
            <p>Discover the latest trends in men's and women's fashion.</p>
          </DestinationCard>
          <DestinationCard>
            <h3>Smart Tech</h3>
            <p>
              Explore cutting-edge gadgets and accessories for modern living.
            </p>
          </DestinationCard>
          <DestinationCard>
            <h3>Home & Lifestyle</h3>
            <p>Find everything from cozy decor to everyday essentials.</p>
          </DestinationCard>
        </DestinationList>
      </Section>

      <Footer>
        &copy; {new Date().getFullYear()} UrbanCart. All rights reserved.
      </Footer>
    </Page>
  );
};

export default HomePage;
