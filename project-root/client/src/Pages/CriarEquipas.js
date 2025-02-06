import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/CriarEquipas.css';
import CampoSvg from '../img/Campo.svg';

export const CriarEquipas = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const jogadores = [
        { id: 1, role: 'gk' }, { id: 2, role: 'gk' },
        { id: 3, role: 'df' }, { id: 4, role: 'df' }, { id: 5, role: 'df' }, { id: 6, role: 'df' }, { id: 7, role: 'df' },
        { id: 8, role: 'md' }, { id: 9, role: 'md' }, { id: 10, role: 'md' }, { id: 11, role: 'md' }, { id: 12, role: 'md' },
        { id: 13, role: 'fw' }, { id: 14, role: 'fw' }, { id: 15, role: 'fw' }, { id: 16, role: 'fw' }, { id: 17, role: 'fw' }
    ];
    const positions = {
        gk: { top: '85%', leftStart: 37, step: 20 },
        df: { top: '55%', leftStart: 23, step: 12 },
        md: { top: '38%', leftStart: 23, step: 12 },
        fw: { top: '20%', leftStart: 23, step: 12 }
    };
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
                            {selectedPlayer !== null && <span className="ms-2">Jogador selecionado: {selectedPlayer}</span>}
                        </div>
                    </div>
                    <div className="field-preview">
                        <img src={CampoSvg} alt="Campo de futebol" className="field-image" />
                        <div className="playersField" >
                            {Object.keys(positions).map(role => {
                                const pos = positions[role];
                                const jogadoresPorPosicao = jogadores.filter(j => j.role === role);
                                return jogadoresPorPosicao.map((jogador, index) => (
                                    <div
                                        key={jogador.id}
                                        className={`player ${jogador.role}`}
                                        style={{ top: pos.top, left: `${pos.leftStart + index * pos.step}%` }}
                                        onClick={() => setSelectedPlayer(jogador.id)}
                                    >
                                        {jogador.id}
                                    </div>
                                ));
                            })}
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
