import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../img/LOGO Academico_Viseu_FC.svg';
import '../Styles/divisoes.css';

export default function TeamSections() {
  
  const navigate = useNavigate(); // Para voltar atrás
  return (
    <div className="divisoes-main-container">
      {/* Painel Esquerdo */}
      <div className="sidebar-panel">
        <div className="header-container">
          <img className="logo-top-image" src={logo} alt="Logo" />
          <div className="jogadores-header">
            <div className="logo-top-text">
              <h1>Viriatos Scouting</h1>
              <h2>DIVISÕES</h2>
            </div>
          </div>
        </div>
        <h3 className="section-title">DIVISÕES</h3>
        <div className="navigation-menu">
          <button className="navigation-button">Equipa profissional</button>
          <button className="navigation-button">Sub-23</button>
          <button className="navigation-button selected">Sub-19 <span>&gt;</span></button>
          <button className="navigation-button">Formação Masculino <span>&gt;</span></button>
          <button className="navigation-button">Formação Feminino <span>&gt;</span></button>
        </div>
      </div>
      {/* Painel Direito */}
      <div className="right-section">
        <div className="button-group">
          <button className="add-player-button">Novos jogadores</button>
          <button className="back-button" onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
