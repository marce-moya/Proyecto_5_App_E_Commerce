import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import '../../App.css'; 
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Product from '../Product';
import Profile from '../Profile';
import Catalog from '../Catalog';
import About from '../About';
import Login from '../Login';
import Register from '../Register';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRutas = () => {

    return (
        <>
        <Router>
          <Header />
          <Switch>
            {/* RUTAS PRIVADAS */}
            <PrivateRoute exact path="/perfil" component={Profile} />          
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
      </>
    );
  }
  
  export default AppRutas;