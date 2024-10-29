import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Viriatos Scouting App</title>
      </Helmet>
      
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
