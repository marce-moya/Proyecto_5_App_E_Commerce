import React from 'react';
import { createRoot } from 'react-dom/client';
import { ProductProvider } from './context/Product/ProductContext';
import { LayoutProvider } from './context/Layout/LayoutContext';
import './index.css';
import AppRutas from './components/Routes/AppRutas';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/User/UserContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ProductProvider>
      <LayoutProvider>
        <UserProvider>
          <AppRutas />
        </UserProvider>
      </LayoutProvider>
    </ProductProvider>
  </React.StrictMode>
);

reportWebVitals();
