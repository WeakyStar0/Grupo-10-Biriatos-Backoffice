import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/gerirtarefas.css';
import axios from 'axios';

export const GerirTarefas = () => {
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);
    const [athletes, setAthletes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        const fetchAthletes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/athletes');
                setAthletes(response.data);
            } catch (error) {
                console.error('Erro ao buscar atletas:', error);
            }
        };

        fetchTasks();
        fetchUsers();
        fetchAthletes();
    }, []);

    const toTask = () => {
        navigate('/task-create');
    };

    const getUserName = (userId) => {
        const user = users.find(user => user.userId === userId);
        return user ? user.fullName : 'Desconhecido';
    };

    const getAthleteName = (athleteId) => {
        const athlete = athletes.find(athlete => athlete.athleteId === athleteId);
        return athlete ? athlete.fullName : 'Desconhecido';
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
                                <th>Jogador</th>
                                <th>Atribuído a</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.taskId}>
                                    <td>{getAthleteName(task.athleteId)}</td>
                                    <td>{getUserName(task.userId)}</td>
                                    <td>{task.description}</td>
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