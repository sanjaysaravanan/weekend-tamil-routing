import { Link, useSearchParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [queryParams] = useSearchParams();

  const loadData = async () => {
    const cat = queryParams.get("category");
    let response;
    if (cat) {
      response = await fetch(
        `https://fakestoreapi.com/products/category/${cat}`
      );
    } else {
      response = await fetch("https://fakestoreapi.com/products");
    }

    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Products Page</h1>
      <Link to="/">Home</Link>
      <br />
      {console.log("query params", queryParams)}
      {["electronics", "jewelery", "men's clothing", "women's clothing"].map(
        (val) => (
          <Link to={`/products?category=${val}`} key={val} reloadDocument>
            {val.toUpperCase()}{" "}
          </Link>
        )
      )}
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <Product {...product} key={product.id} />
        </Link>
      ))}
    </>
  );
};

export default Products;
