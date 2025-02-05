import React from 'react';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

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
          <p className="terms-link">Termos e Condições</p>
          <button type="submit" className="auth-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
