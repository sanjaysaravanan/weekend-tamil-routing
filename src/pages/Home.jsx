import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/products">Products</Link>
    </>
  );
};

export default Home;
