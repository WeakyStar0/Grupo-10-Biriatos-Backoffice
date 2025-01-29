

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/divisoes.css'; 

export default function ScoutingUI() {
  return (
    <div className="container">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="header">
          <div className="logo">AF</div>
          <h1 className="title">
            Viriatos <span className="subtitle">Scouting</span>
          </h1>
        </div>
        <h2 className="section-title">Jogadores</h2>
        <ul className="menu">
          <li>Equipa profissional</li>
          <li>Sub-23</li>
          <li className="highlight">Sub-19 <span>&gt;</span></li>
          <li>Formação Masculino <span>&gt;</span></li>
          <li>Formação Feminino <span>&gt;</span></li>
        </ul>
      </div>
      
      {/* Right Panel */}
      <div className="right-panel">
        <button className="primary-button">Novos jogadores</button>
        <button className="secondary-button">Voltar</button>
      </div>
    </div>
  );
}