import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/CriarEquipas.css';
import CampoSvg from '../img/Campo.svg';

export const CriarEquipas = () => {
    const jogadores = [
        { id: 1, top: '85%', left: '50%', role: 'gk' },
        { id: 2, top: '85%', left: '40%', role: 'gk' },
        { id: 5, top: '70%', left: '45%', role: 'df' },
        { id: 4, top: '70%', left: '35%', role: 'df' },
        { id: 6, top: '70%', left: '25%', role: 'df' },
        { id: 7, top: '70%', left: '15%', role: 'df' },
        { id: 3, top: '55%', left: '50%', role: 'md' },
        { id: 8, top: '55%', left: '60%', role: 'md' },
        { id: 9, top: '55%', left: '70%', role: 'md' },
        { id: 10, top: '55%', left: '40%', role: 'md' },
        { id: 11, top: '55%', left: '30%', role: 'md' },
        { id: 12, top: '40%', left: '20%', role: 'fw' },
        { id: 13, top: '40%', left: '30%', role: 'fw' },
        { id: 14, top: '40%', left: '40%', role: 'fw' },
        { id: 15, top: '40%', left: '50%', role: 'fw' },
        { id: 16, top: '40%', left: '60%', role: 'fw' },
        { id: 17, top: '40%', left: '70%', role: 'fw' }
    ];

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
                            <input type="text" className="form-control" placeholder="Nome da equipa..." />
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
                        <div className="field-preview">
                            <img src={CampoSvg} alt="Campo de futebol" className="field-image" />
                            <div className="player gk" style={{ top: "80%", left: "50%" }}>1</div>
                            <div className="player gk" style={{ top: "80%", left: "45%" }}>2</div>
                            <div className="player df" style={{ top: "65%", left: "40%" }}>3</div>
                            <div className="player df" style={{ top: "65%", left: "50%" }}>4</div>
                            <div className="player df" style={{ top: "65%", left: "60%" }}>5</div>
                            <div className="player df" style={{ top: "65%", left: "30%" }}>6</div>
                            <div className="player df" style={{ top: "65%", left: "20%" }}>7</div>
                            <div className="player md" style={{ top: "50%", left: "25%" }}>8</div>
                            <div className="player md" style={{ top: "50%", left: "35%" }}>9</div>
                            <div className="player md" style={{ top: "50%", left: "45%" }}>10</div>
                            <div className="player md" style={{ top: "50%", left: "55%" }}>11</div>
                            <div className="player fw" style={{ top: "35%", left: "30%" }}>12</div>
                            <div className="player fw" style={{ top: "35%", left: "40%" }}>13</div>
                            <div className="player fw" style={{ top: "35%", left: "50%" }}>14</div>
                            <div className="player fw" style={{ top: "35%", left: "60%" }}>15</div>
                            <div className="player fw" style={{ top: "35%", left: "70%" }}>16</div>
                            <div className="player fw" style={{ top: "35%", left: "80%" }}>17</div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn btn-danger">Cancelar</button>
                    <button className="btn btn-success">Guardar</button>
                </div>
            </div>
        </div>
    );
};
