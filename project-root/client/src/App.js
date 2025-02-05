import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../src/Components/navbar';
import Footer from '../src/Components/footer';
import { Helmet } from 'react-helmet';

const App = () => {
  const location = useLocation(); // Obtém a rota atual

  return (
    <div className="App">
      <Helmet>
        <title>Viriatos Scouting App</title>
      </Helmet>

      {/* Renderiza a Navbar somente se não estiver na página de login */}
      {location.pathname !== '/' && <Navbar />}

      <Outlet /> {/* Renderiza a página conforme a rota */}

      {/* Renderiza o Footer somente nas rotas permitidas */}
      {location.pathname !== '/' && 
       location.pathname !== '/panel' && 
       location.pathname !== '/tarefas' && 
       location.pathname !== '/consultar-relatorio' &&
       location.pathname !== '/criarutilizador' &&
       location.pathname !== '/perfildejogador' &&
       ( 
         <Footer />
       )}
    </div>
  );
}

export default App;