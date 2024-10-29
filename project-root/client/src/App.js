import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../src/Components/navbar';
import Footer from '../src/Components/footer';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Viriatos Scouting App</title>
      </Helmet>

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
