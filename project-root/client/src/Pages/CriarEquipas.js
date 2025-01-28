import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/CriarEquipas.css'
import CampoSvg from '../img/Campo.svg';


export const CriarEquipas = () => {
    return (
        <div className="home-container">
            <div style={{ height: '10vh' }}></div>
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
                        <img src={CampoSvg} alt="Campo de futebol" className="field-image" />
                            <div className="players">
                                <div className="player.1" style={{ top: '85%', left: '50%' }}>1</div>
                                <div className="player.1" style={{ top: '85%', left: '40%' }}>2</div>
                                <div className="player.2" style={{ top: '70%', left: '45%' }}>5</div>
                                <div className="player.2" style={{ top: '70%', left: '35%' }}>4</div>
                                <div className="player.2" style={{ top: '70%', left: '25%' }}>6</div>
                                <div className="player.2" style={{ top: '70%', left: '15%' }}>7</div>
                                <div className="player.2" style={{ top: '55%', left: '50%' }}>3</div>
                                <div className="player3" style={{ top: '55%', left: '60%' }}>8</div>
                                <div className="player3" style={{ top: '55%', left: '70%' }}>9</div>
                                <div className="player3" style={{ top: '55%', left: '40%' }}>10</div>
                                <div className="player3" style={{ top: '55%', left: '30%' }}>11</div>
                                <div className="player3" style={{ top: '40%', left: '20%' }}>12</div>
                                <div className="player4" style={{ top: '40%', left: '30%' }}>13</div>
                                <div className="player4" style={{ top: '40%', left: '40%' }}>14</div>
                                <div className="player4" style={{ top: '40%', left: '50%' }}>15</div>
                                <div className="player4" style={{ top: '40%', left: '60%' }}>16</div>
                                <div className="player4" style={{ top: '40%', left: '70%' }}>17</div>
                            </div>
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