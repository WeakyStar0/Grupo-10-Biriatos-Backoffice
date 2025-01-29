import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/divisoes.css'; 
import '../Styles/Panel.css'; 

export default function ScoutingUI() {
  return (
    <div className="container">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="header">
            JOGADORES
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
      <div className="vertical-bars">
                <div className="vertical-bar-3"></div>
                <div className="vertical-bar-2"></div>
                <div className="vertical-bar">
                    <div className="greeting">
                    <button className="primary-button">Novos jogadores</button>
                    <button className="secondary-button">Voltar</button>

                    </div>
                </div>
            </div> 
            </div>
  );
}