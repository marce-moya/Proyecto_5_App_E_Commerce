import React, { createContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('REACT_APP_BACKEND_URL');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext