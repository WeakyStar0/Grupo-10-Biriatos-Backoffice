import React from 'react';
import '../Styles/Panel.css'; 

export const Panel = () => {
    return (
        <div className="panel-container">
            <div className="sidebar">
                <div className="logo">
                    <h1>Viriatos Scouting</h1>
                    <h2>ADMIN PANEL</h2>
                </div>
                <div className="menu">
                   
                    <div className="menu-section">
                        <div className="menu-icon">
                            <img src="/icons/player-icon.png" alt="Jogadores" />
                        </div>
                        <button className="menu-item">Consultar jogadores</button>
                        <button className="menu-item">Criar jogador</button>
                    </div>

                 
                    <div className="menu-section">
                        <div className="menu-icon">
                            <img src="/icons/team-icon.png" alt="Equipas" />
                        </div>
                        <button className="menu-item">Consultar equipas</button>
                        <button className="menu-item">Criar equipa</button>
                    </div>

                
                    <div className="menu-section">
                        <div className="menu-icon">
                            <img src="/icons/match-icon.png" alt="Jogos" />
                        </div>
                        <button className="menu-item">Consultar jogos</button>
                        <button className="menu-item">Criar jogo</button>
                    </div>

                   
                    <div className="menu-section">
                        <div className="menu-icon">
                            <img src="/icons/report-icon.png" alt="Relatórios" />
                        </div>
                        <button className="menu-item">Consultar relatórios</button>
                    </div>

                    
                    <div className="menu-section">
                        <div className="menu-icon">
                            <img src="/icons/task-icon.png" alt="Tarefas" />
                        </div>
                        <button className="menu-item">Gerir tarefas</button>
                    </div>
                </div>
            </div>

            
            <div className="vertical-bars">
                <div className="vertical-bar-3"></div>
                <div className="vertical-bar-2"></div>
                <div className="vertical-bar">
                    <div className="greeting">
                        <h3>Olá, Marcelo</h3>
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
