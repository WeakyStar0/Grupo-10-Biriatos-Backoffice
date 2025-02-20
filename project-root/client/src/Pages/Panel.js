// Panel.js
import React, { useContext } from 'react';
import '../Styles/Panel.css';
import logo from '../img/LOGO Academico_Viseu_FC.svg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

export const Panel = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { role, fullName } = user || { role: 'Outro', fullName: 'Utilizador' }; // Default values

  const getPanelTitle = () => {
    switch (role) {
      case 'Administrador':
        return 'ADMIN PANEL';
      case 'Utilizador':
        return 'USER PANEL';
      default:
        return 'GUEST PANEL';
    }
  };

  return (
    <div className="panel-container">
      <div className="panel-sidebar">
        <div style={{ height: '100px' }}></div>
        <div className="logo-top">
          <img className="logo-top-image" src={logo} alt="Logo" />
          <div className="logo-top-text">
            <h1>Viriatos Scouting</h1>
            <h2>{getPanelTitle()}</h2>
          </div>
        </div>
        <div className="menu">
          <div className="panel-menu-section">
            <div className="menu-icon">
              <img src="/person.svg" alt="Jogadores" />
            </div>
            <div className="menu-buttons">
              <button className="panel-menu-item" onClick={() => navigate('/divisoes')}> 
                Consultar jogadores
              </button>
              {(role === 'Administrador' || role === 'Utilizador') && (
                <button className="panel-menu-item" onClick={() => navigate('/criarjogador')}>
                  Criar jogador
                </button>
              )}
            </div>
          </div>
          {role === 'Administrador' && (
            <div className="panel-menu-section">
              <div className="menu-icon">
                <img src="/group.svg" alt="Equipas" />
              </div>
              <div className="menu-buttons">
                <button className="panel-menu-item" onClick={() => navigate('/consultar-equipas')}>
                  Consultar equipas
                </button>
                <button className="panel-menu-item" onClick={() => navigate('/CriarEquipas')}>
                  Criar equipa
                </button>
              </div>
            </div>
          )}
          {(role === 'Administrador' || role === 'Utilizador') && (
            <div className="panel-menu-section">
              <div className="menu-icon">
                <img src="/report.svg" alt="Relatórios" />
              </div>
              <div className="menu-buttons">
                <button className="panel-menu-item" onClick={() => navigate('/consultar-relatorio')}>
                  Consultar Relatórios
                </button>
              </div>
            </div>
          )}
          {role === 'Administrador' && (
            <div className="panel-menu-section">
              <div className="menu-icon">
                <img src="/task.svg" alt="Tarefas" />
              </div>
              <div className="menu-buttons">
                <button className="panel-menu-item" onClick={() => navigate('/tarefas')}>
                  Gerir tarefas
                </button>
                <button className="panel-menu-item" onClick={() => navigate('/criarutilizador')}>
                  Criar Utilizador
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="vertical-bars">
        <div className="vertical-bar-3"></div>
        <div className="vertical-bar-2"></div>
        <div className="vertical-bar">
          <div className="greeting">
            <h3>Olá,</h3>
            <h3>{fullName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>
          </div>
        </div>
      </div>
      <div className="main-content"></div>
      <div className="logout">
        <button onClick={() => navigate('/')}>LOGOUT</button>
      </div>
    </div>
  );
};