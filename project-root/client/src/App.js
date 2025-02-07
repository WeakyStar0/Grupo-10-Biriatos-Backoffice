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
        <title>Viriatos Scouting</title>
      </Helmet>
      {/* Renderiza a Navbar somente se não estiver na página de login */}
      {location.pathname === '/' && <Navbar />}
      <Outlet />
      {location.pathname === '/' && <Footer />}
    </div>
  );
}

export default App;