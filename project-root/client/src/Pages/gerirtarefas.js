import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/gerirtarefas.css'

export const GerirTarefas = () => {
    {
        const tasks = [
            { name: 'Tarefa 1', assignedTo: 'User 41389', date: '5/11/2024' },
            { name: 'Tarefa 2', assignedTo: 'User 41389', date: '5/11/2024' },
            { name: 'Tarefa 3', assignedTo: 'User 41389', date: '5/11/2024' },
            { name: 'Tarefa 4', assignedTo: 'User 41389', date: '5/11/2024' },
            { name: 'Tarefa 5', assignedTo: 'User 41389', date: '5/11/2024' },
            { name: 'Tarefa 6', assignedTo: 'User 41389', date: '5/11/2024' },
            { name: 'Tarefa 7', assignedTo: 'User 41389', date: '5/11/2024' },

            // Add more tasks as needed
        ];
        const navigate = useNavigate();
        const toTask = () => {
            navigate('/task-create');
        };
        const voltar = () => {
            alert('Voltar à página anterior.');
        };
        return (
            <div className="home-container">
                <header className="header">
                    <h1>Viriatos Scouting</h1>
                    <span>TAREFAS</span>
                </header>
                <div className="container">
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
                    <div className="button-container">
                        <button
                            className="button"
                            onClick={toTask}>
                            Atribuir nova tarefa
                        </button>
                    </div>
                </div>
                <footer className="footer">
                    <button className="button" onClick={voltar}>Voltar</button>
                </footer>
            </div>
        );
    };
};