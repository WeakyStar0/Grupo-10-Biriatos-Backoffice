import React from 'react';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

const HoverCard = () => {
  return (
    <div class="home-card">
      <div class="home-first-content">
        <span>App Viriatos Scouting</span>
      </div>
      <a href="https://weakystar0.github.io/Grupo-10-Biriatos-Webpage/index.html" target="_blank" rel="noopener noreferrer" className="custom-link">
        <div class="home-second-content">
          <span>Clique<br />aqui</span>
        </div>
      </a>
    </div>
  );
};

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="bg-elements">
        <div className="bg-layer dark"></div>
        <div className="bg-layer light"></div>
        <div className="bg-layer dark-inner"></div>
      </div>
      <div className="auth-header">
        <img src="/LOGO Academico_Viseu_FC_black.svg" alt="Logo" className="brand-logo" />
        <h1 className="brand-title">Viriatos Scouting</h1>
      </div>
      <div className="auth-content">
        <h2 className="auth-title">LOGIN</h2>
        <form className="auth-form">
          <div className="auth-group">
            <label>EMAIL</label>
            <input type="text" className="auth-input" />
          </div>
          <div className="auth-group">
            <label>PASSWORD</label>
            <input type="password" className="auth-input" />
          </div>
          <p className="terms-link" onClick={() => navigate('/termoscondicoes')}>Termos e Condições</p>
          <button type="submit" className="auth-button">LOGIN</button>
        </form>
      </div>
      <HoverCard />
    </div>
  );
};
