import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/gerirtarefas.css';

export const GerirTarefas = () => {
    const tasks = [
        { name: 'Tarefa 1', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 2', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 3', assignedTo: 'User 41389', date: '5/11/2024' },
    ];

    const navigate = useNavigate();
    const toTask = () => {
        navigate('/task-create');
    };

    return (
        <div className="page-container">
            <div className="top-bar">
                <div className="top-bar-background">
                    <div className="top-bar-content">
                        <p className="top-bar-title">TAREFA</p>
                    </div>
                </div>
            </div>

            <div className="content-container">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Atribuído a</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.assignedTo}</td>
                                    <td>{task.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="button-wrapper">
                    <button className="primary-button" onClick={toTask}>
                        Atribuir nova tarefa
                    </button>
                </div>
            </div>
        </div>
    );
};
