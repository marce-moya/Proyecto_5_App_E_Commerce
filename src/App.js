import './App.css';
import Main from './components/Main'
import Product from './components/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Catalog from './components/Catalog'
import About from './components/About'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ProductState from './context/Product/ProductState'
import UserState from './context/User/UserState'
import LayoutState from './context/Layout/LayoutState'
import AuthRoute from './components/Routes/AuthRoute'
import PrivateRoute from './components/Routes/PrivateRoute'
import PublicRoute from './components/Routes/PublicRoute'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import './App.css';



const App = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/productos');
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


const AppRutas = () => {

  return (
    <>
    <LayoutState>
      <ProductState>
        <UserState>
          <Router>
            <Header />

            <Switch>

              {/* RUTAS PRIVADAS */}
              <PrivateRoute exact path="/perfil" component={ Profile } />          

              {/* RUTAS DE AUTENTICACIÓN */}
              <AuthRoute exact path="/iniciar-sesion" component={Login} />
              <AuthRoute exact path="/crear-cuenta" component={Register} />

              {/* RUTAS ESTÁTICAS */}
              <PublicRoute exact path="/catalogo" component={Catalog} />

              {/* RUTAS DINÁMICAS */}
              <PublicRoute exact path="/:productId" component={Product} />

              {/* RUTA BASE */}
              <PublicRoute exact path="/" component={Main} />

              {/* RUTA PUBLICA */}
              <PublicRoute exact path="/about" component={About} />

              {/* RUTA DESCONOCIDA */}
                <Route path="*">
                  <Redirect to="/" />
                </Route>
              

            </Switch>

            <Footer />
          </Router>
          </UserState>
        </ProductState>
      </LayoutState>
    </>
  );
}

export default AppRutas;
