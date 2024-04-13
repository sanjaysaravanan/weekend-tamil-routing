import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./pages/Layout";

const DefaultElement = () => {
  return (
    <>
      <h4>No page found,please check the URL</h4>
      <Link to="/">Home</Link>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:prodId" element={<Product />} />
            <Route path="about-us" element={<h1>About Us Page</h1>} />
            <Route path="*" element={<DefaultElement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
