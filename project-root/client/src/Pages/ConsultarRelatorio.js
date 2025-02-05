import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/gerirtarefas.css';

export const ConsultarRelatorio = () => {
    const reports = [
        { id: 1, name: 'Relatório 1', player: 'User 41389', sub: 'ola', date: '5/11/2024' },
        { id: 2, name: 'Relatório 2', player: 'User 41390', sub: 'ola', date: '6/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
    ];

    const navigate = useNavigate();

    const openReport = (id) => {
        navigate(`/create-report`);
    };

    return (
        <div className="page-container">
            <div className="top-bar">
                <div className="top-bar-background">
                    <div className="top-bar-content">
                        <p className="top-bar-title">RELATÓRIO</p>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Jogador</th>
                                <th>Submissor</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => (
                                <tr
                                    key={report.id}
                                    onClick={() => openReport(report.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td>{report.name}</td>
                                    <td>{report.player}</td>
                                    <td>{report.sub}</td>
                                    <td>{report.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
