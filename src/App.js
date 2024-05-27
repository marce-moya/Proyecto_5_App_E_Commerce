import React, { useEffect, useState } from 'react';
import './App.css';
import AppRutas from "./components/Routes/AppRutas"


const App = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('REACT_APP_BACKEND_URL');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();


  }, []);

  return (
    
    <div>
      <Router>
        <AppRutas />
      </Router>
      <h1>Productos para Mascotas</h1>
      <div className="productos">
        {productos.map((producto) => (
          <div key={producto._id} className="producto">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

