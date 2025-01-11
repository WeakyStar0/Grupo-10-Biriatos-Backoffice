import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/gerirtarefas.css';

export const ConsultarRelatorio = () => {
    const tasks = [
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        { name: 'Tarefa 1', player: 'User 41389', sub: 'ola' , date: '5/11/2024' },
        
        
    ];
    const navigate = useNavigate();
    const toTask = () => {
        navigate('/task-create');
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
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.player}</td>
                                    <td>{task.sub}</td>
                                    <td>{task.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="button-container">
                    <button className="button" onClick={toTask}>
                        Criar novo relatorio
                    </button>
                </div>
            </div>
        </div>
    );
};
