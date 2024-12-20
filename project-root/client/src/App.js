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

      {location.pathname !== '/' && <Footer />} {/* Render Footer only if not on Home route */}
    </div>
  );
}

export default App;
