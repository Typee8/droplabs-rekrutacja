import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "./fetchAPI";
import type { Product } from "./types";

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

const Grid = styled.ul`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Card = styled.li`
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

const Products: React.FC = () => {
  const [productsList, setProductList] = useState<Product[]>([]);
  const [productsListRender, setProductsListRender] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchAllProducts();
        setProductList(fetchedProducts);
        setProductsListRender(fetchedProducts);
      } catch {
        alert("Failed to fetch products.");
        setTimeout(() => window.location.reload(), 5000);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortedProducts: Product[] = [...productsList];

    if (filterType === "default") {
      sortedProducts = [...productsList];
    } else if (filterType === "price: ascending") {
      sortedProducts = [...productsList].sort(
        (product, nextProduct) => product.price - nextProduct.price
      );
    } else if (filterType === "price: descending") {
      sortedProducts = [...productsList].sort(
        (product, nextProduct) => nextProduct.price - product.price
      );
    }

    if (searchValue.trim().length > 0) {
      sortedProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setProductsListRender(sortedProducts);
  }, [searchValue, filterType]);

  return productsList.length === 0 ? (
    "Loading"
  ) : (
    <Page>
      <Navbar />
      <Title>Our Travel Packages</Title>
      <label htmlFor="product-search">Search</label>
      <input
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.target.value)}
        id="product-search"
      ></input>
      <label htmlFor="product-filter">Filter:</label>
      <select
        value={filterType}
        onChange={(evt) => setFilterType(evt.target.value)}
        id="product-filter"
      >
        <option value="default">default</option>
        <option value="price: ascending">price: ascending</option>
        <option value="price: descending">price: descending</option>
      </select>
      <Grid>
        {productsListRender.map((product) => (
          <Card key={product.id}>
            <Link to={`/product-details/${product.id}`}>
              <Image src={product.image} alt={product.title} />
              <Info>
                <ProductTitle>{product.title}</ProductTitle>
                <Price>{`$ ${product.price}`}</Price>
              </Info>
            </Link>
          </Card>
        ))}
      </Grid>
    </Page>
  );
};

export default Products;
