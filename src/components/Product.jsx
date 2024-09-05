import React, { useState, useEffect } from "react";

function Product({ productId, url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `${url}/products/${productId}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId, url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Asegúrate de que los nombres de las propiedades coincidan con los de la API

  const imgLink= data.productImageLink
  const productName= data.productName

  return (
    <>
      <h3>{productName}</h3>
      <img src={imgLink} alt="productImage" />
    </>
  );
}

export default Product;
