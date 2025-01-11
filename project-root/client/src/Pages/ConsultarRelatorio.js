import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/gerirtarefas.css';

export const ConsultarRelatorio = () => {
    const tasks = [
        { id: 1, name: 'Relatório 1', player: 'User 41389', sub: 'ola', date: '5/11/2024' },
        { id: 2, name: 'Relatório 2', player: 'User 41390', sub: 'ola', date: '6/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
        { id: 3, name: 'Relatório 3', player: 'User 41391', sub: 'ola', date: '7/11/2024' },
    ];

    const navigate = useNavigate();

    
    const openReport = (id) => {
        navigate(`/create-report`); 
    };

    return (
        <div className="home-container">
            <div className="header">
                <div className="inner-rectangle">
                    <div className="core-rectangle">
                        <p className="core-text">RELATÓRIO</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="task-table-container">
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
                            {tasks.map((task) => (
                                <tr
                                    key={task.id}
                                    onClick={() => openReport(task.id)} 
                                    style={{ cursor: 'pointer' }} 
                                >
                                    <td>{task.name}</td>
                                    <td>{task.player}</td>
                                    <td>{task.sub}</td>
                                    <td>{task.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
