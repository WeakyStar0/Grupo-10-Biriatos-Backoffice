import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/consultarequipas.css';

export const ConsultarEquipas = () => {
    const teams = [
        { name: 'Equipe A', type: 'Própria', tier: 'Sub-23', submitter: 'User 12345', date: '10/02/2025' },
        { name: 'Equipe B', type: 'Sombra', tier: 'Sub-19', submitter: 'User 67890', date: '12/02/2025' },
        { name: 'Equipe C', type: 'Própria', tier: 'Equipa profissional', submitter: 'User 11223', date: '15/02/2025' },
    ];
    const navigate = useNavigate();
    return (
        <div className="page-container">
            <div className="top-bar">
                <div className="top-bar-background">
                    <div className="top-bar-content">
                        <p className="top-bar-title">CONSULTAR EQUIPAS</p>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome da Equipa</th>
                                <th>Tipo</th>
                                <th>Escalão</th>
                                <th>Submissor</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map((team, index) => (
                                <tr key={index}>
                                    <td>{team.name}</td>
                                    <td>{team.type}</td>
                                    <td>{team.tier}</td>
                                    <td>{team.submitter}</td>
                                    <td>{team.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};