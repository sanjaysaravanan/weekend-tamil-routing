import { useParams } from "react-router-dom";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Product = (props) => {
  const pathParams = useParams();
  const [prodData, setProdData] = useState(props);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://fakestoreapi.com/products/${pathParams.prodId}`
    );

    const data = await response.json();

    setProdData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (pathParams.prodId) loadData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return "Loading...";
  }

  return (
    <div
      id={prodData.id}
      style={{
        border: "1px solid",
        margin: 16,
        padding: 16,
        textAlign: "center",
      }}
    >
      <img
        style={{ width: 210, height: 300, objectFit: "contain" }}
        src={prodData.image}
        alt={prodData.title}
      />
      <h3>{prodData.title}</h3>
      <h4>$ {prodData.price}</h4>
      <p>{prodData.description}</p>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default Product;
