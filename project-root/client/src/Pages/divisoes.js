import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/divisoes.css'; 

export default function Divisoes() {
  const { clubName } = useParams(); // Captura o nome do clube da URL
  const navigate = useNavigate(); // Para voltar atrás

  return (
    <div className="container">
      {/* Painel Esquerdo */}
      <div className="left-panel">
        <div className="logo-title">
          <img src="logo.png" alt="Logo" className="logo" />
          <h1>Viriatos Scouting</h1>
        </div>
        <h3 className="sub-title">JOGADORES - {clubName}</h3>

        <div className="menu">
          <button className="menu-button">Equipa profissional</button>
          <button className="menu-button">Sub-23</button>
          <button className="menu-button highlighted">Sub-19 <span>&gt;</span></button>
          <button className="menu-button">Formação Masculino <span>&gt;</span></button>
          <button className="menu-button">Formação Feminino <span>&gt;</span></button>
        </div>
      </div>

      {/* Painel Direito */}
      <div className="right-panel">
        <div className="button-container">
          <button className="primary-button">Novos jogadores</button>
          <button className="secondary-button" onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </div>
    </div>
  );
}