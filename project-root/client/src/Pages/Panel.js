import React from 'react';
import '../Styles/Panel.css'; // Importando o arquivo de estilos CSS

export const Panel = () => {
    return (
        <div className="panel-container">
            <div className="sidebar">
                <div className="logo">
                    <h1>Viriatos Scouting</h1>
                    <h2>ADMIN PANEL</h2>
                </div>
                <div className="menu">
                    <button className="menu-item">Consultar jogadores</button>
                    <button className="menu-item">Criar jogador</button>
                    <button className="menu-item">Consultar equipas</button>
                    <button className="menu-item">Criar equipa</button>
                    <button className="menu-item">Consultar jogos</button>
                    <button className="menu-item">Criar jogo</button>
                    <button className="menu-item">Consultar relatórios</button>
                    <button className="menu-item">Gerir tarefas</button>
                </div>
            </div>
            <div className="main-content">
                <div className="greeting">
                    <h3>Olá, Marcelo</h3>
                </div>
                <div className="logout">
                    <button>LOGOUT</button>
                </div>
            </div>
        </div>
    );
};
