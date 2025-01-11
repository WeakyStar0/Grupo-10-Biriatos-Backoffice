import React from 'react';
import '../Styles/Panel.css'; 
import { useNavigate } from 'react-router-dom';

export const Panel = () => {
    const navigate = useNavigate(); // Hook do React Router para navegação

    return (
        <div className="panel-container">
            <div className="sidebar">
                <div className="logo">
                    <img 
                        src="/LOGO Academico_Viseu_FC_black.svg" 
                        alt="Académico Viseu Logo" 
                        className="logo-image" 
                    />
                    <div className="logo-text">
                        <h1>Viriatos Scouting</h1>
                        <h2>ADMIN PANEL</h2>
                    </div>
                </div>
                <div className="menu">
                    <div className="menu-section">
                        <div className="menu-icon">
                            <img src="/person.svg" alt="Jogadores" />
                        </div>
                        <div className="menu-buttons">
                            <button className="menu-item">Consultar jogadores</button>
                            <button className="menu-item">Criar jogador</button>
                        </div>
                    </div>

                    <div className="menu-section">
                        <div className="menu-icon">
                            <img src="/group.svg" alt="Equipas" />
                        </div>
                        <div className="menu-buttons">
                            <button className="menu-item">Consultar equipas</button>
                            <button 
                            className="menu-item"
                            onClick={() => navigate('/CriarEquipas')}
                            >
                            Criar equipa
                            </button>
                        </div>
                    </div>

                    <div className="menu-section">
                        <div className="menu-icon">
                            <img src="/report.svg" alt="Relatórios" />
                        </div>
                        <div className="menu-buttons">
                            <button className="menu-item">Consultar relatórios</button>
                        </div>
                    </div>

                    <div className="menu-section">
                        <div className="menu-icon">
                            <img src="/task.svg" alt="Tarefas" />
                        </div>
                        <div className="menu-buttons">
                            <button 
                                className="menu-item"
                                onClick={() => navigate('/tarefas')} // Navega para a rota "/tarefas"
                            >
                                Gerir tarefas
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vertical-bars">
                <div className="vertical-bar-3"></div>
                <div className="vertical-bar-2"></div>
                <div className="vertical-bar">
                    <div className="greeting">
                    <h3>Olá,</h3>
                    <h3>Marcelo</h3>
                    </div>
                </div>
            </div>

            <div className="main-content"></div>
            <div className="logout">
                <button>LOGOUT</button>
            </div>
        </div>
    );
};
