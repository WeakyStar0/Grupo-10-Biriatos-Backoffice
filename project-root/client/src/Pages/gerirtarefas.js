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
        { name: 'Tarefa 4', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 5', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 6', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 7', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 8', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 9', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 10', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 11', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 12', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 13', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 13', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 13', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 13', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 13', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 13', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 13', assignedTo: 'User 41389', date: '5/11/2024' },
        { name: 'Tarefa 13', assignedTo: 'User 41389', date: '5/11/2024' },
    ];
    const navigate = useNavigate();
    const toTask = () => {
        navigate('/task-create');
    };
    
    return (
        <div className="home-container">
            {/* Retângulos no topo */}
            <div className="header">
                <div className="inner-rectangle">
                    <div className="core-rectangle">
                        <p className="core-text">TAREFA</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="task-table-container">
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
                <div className="button-container">
                    <button className="button" onClick={toTask}>
                        Atribuir nova tarefa
                    </button>
                </div>
            </div>
        </div>
    );
};
