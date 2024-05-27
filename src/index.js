import React from 'react';
import ReactDOM from 'react-dom';
import { ProductProvider } from './context/Product/ProductContext';
import './index.css';
import AppRutas from './components/Routes/AppRutas';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <AppRutas />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
