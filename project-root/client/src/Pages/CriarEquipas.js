import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/CriarEquipas.css'


export const CriarEquipas = () => {
    return (
        <div className="home-container">
            <div className="create-team-page">
                <header>
                    <h1>Criar equipa</h1>
                </header>
                <div className="team-form">
                    <div className="form-controls">
                        <div className="control-group">
                            <label>Tipo de equipa:</label>
                            <button className="btn btn-secondary">Própria</button>
                            <button className="btn btn-secondary">Sombra</button>
                        </div>
                        <div className="control-group">
                            <label>Nome da equipa:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nome da equipa..."
                            />
                        </div>
                        <div className="control-group">
                            <label>Escolher escalão:</label>
                            <select className="form-select">
                                <option value="Equipa profissional">Equipa profissional</option>
                                <option value="Sub-23">Sub-23</option>
                                <option value="Sub-19">Sub-19</option>
                            </select>
                        </div>
                        <div className="control-group">
                            <label>Escolher jogador:</label>
                            <select className="form-select">
                                <option value="">Selecione um jogador...</option>
                                <option value="Jogador 1">Jogador 1</option>
                                <option value="Jogador 2">Jogador 2</option>
                                <option value="Jogador 3">Jogador 3</option>
                            </select>
                            <button className="btn btn-primary mt-2">Adicionar</button>
                        </div>
                    </div>
                    <div className="field-preview">
                        <div className="field">
                            {/* Linhas do campo */}
                            <div className="goal-area"></div>
                            <div className="penalty-box"></div>
                            <div className="center-circle"></div>
                            <div className="half-line"></div>
                            {/* Renderização dos jogadores */}
                            <div className="player gk" style={{ top: '80%', left: '45%' }}>1</div>
                            <div className="player gk" style={{ top: '75%', left: '55%' }}>2</div>
                            <div className="player df" style={{ top: '65%', left: '20%' }}>3</div>
                            <div className="player df" style={{ top: '65%', left: '35%' }}>4</div>
                            <div className="player df" style={{ top: '65%', left: '65%' }}>5</div>
                            <div className="player df" style={{ top: '65%', left: '80%' }}>6</div>
                            <div className="player md" style={{ top: '50%', left: '25%' }}>7</div>
                            <div className="player md" style={{ top: '50%', left: '50%' }}>8</div>
                            <div className="player md" style={{ top: '50%', left: '75%' }}>9</div>
                            <div className="player fw" style={{ top: '35%', left: '30%' }}>10</div>
                            <div className="player fw" style={{ top: '35%', left: '70%' }}>11</div>
                            <div className="player fw" style={{ top: '20%', left: '40%' }}>12</div>
                            <div className="player fw" style={{ top: '20%', left: '60%' }}>13</div>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-danger">Cancelar</button>
                            <button className="btn btn-success">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};