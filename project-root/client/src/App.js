import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../src/Components/navbar';
import Footer from '../src/Components/footer';
import { Helmet } from 'react-helmet';

const App = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="App">
      <Helmet>
        <title>Viriatos Scouting App</title>
      </Helmet>

      <Navbar />
      <Outlet /> {/* Renders the page component based on the current route */}

      {location.pathname !== '/' && 
       location.pathname !== '/panel' && 
       location.pathname !== '/tarefas' && 
       location.pathname !== '/consultar-relatorio' &&
       location.pathname !== '/criarutilizador' &&
       ( 
         <Footer />
       )}
    </div>
  );
}

export default App;
