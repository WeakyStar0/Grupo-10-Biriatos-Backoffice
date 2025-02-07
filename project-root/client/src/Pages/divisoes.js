import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../img/LOGO Academico_Viseu_FC.svg';
import '../Styles/divisoes.css';

export default function TeamSections() {
  const navigate = useNavigate();

  // Objeto com as divisões e equipas
  const teamsData = [
    { nome: "Sub-19", equipas: ["Equipa A", "Equipa B", "Equipa C", "Equipa D", "Equipa E", "Equipa F"] },
    { nome: "Formação Masculino", equipas: ["Equipa A", "Equipa B", "Equipa C", "Equipa D", "Equipa E", "Equipa F"] },
    { nome: "Formação Feminino", equipas: ["Equipa A", "Equipa B", "Equipa C", "Equipa D", "Equipa E", "Equipa F"] }
  ];

  return (
    <div className="teamsections-main-wrapper">
      {/* Painel Esquerdo */}
      <div className="teamsections-sidebar-container">
        <div className="teamsections-header-box">
          <img className="logo-top-image" src={logo} alt="Logo" />
          <div className="teamsections-title-container">
            <div className="logo-top-text">
              <h1>Viriatos Scouting</h1>
              <h2>DIVISÕES</h2>
            </div>
          </div>
        </div>
        <button className='teamsections-non-accordion-button'>Equipa Profissional</button>
        <button className='teamsections-non-accordion-button'>Sub-23</button>
        <div className="teamsections-accordion" id="divisoesAccordion">
          {teamsData.map((divisao, index) => (
            <div className="teamsections-accordion-item" key={index}>
              <h2 className="teamsections-accordion-header">
                <button
                  className={`teamsections-accordion-button ${index === 0 ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#teamsections-collapse${index}`}
                  aria-expanded={false} // Faz com que todas as secções comecem fechadas
                  aria-controls={`teamsections-collapse${index}`}
                >
                  {divisao.nome}
                </button>
              </h2>
              <div id={`teamsections-collapse${index}`} className={`teamsections-accordion-collapse collapse`} data-bs-parent="#divisoesAccordion">
                <div className="teamsections-accordion-body">
                  <ul className="teamsections-list">
                    {divisao.equipas.map((equipa, idx) => (
                      <li key={idx} className="teamsections-list-item">{equipa}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Painel Direito */}
      <div className="teamsections-action-panel">
        <div className="teamsections-button-group">
          <button className="teamsections-add-button">Novos jogadores</button>
          <button className="teamsections-back-button" onClick={() => navigate(-1)}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
