import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/TaskCreate.css';
import '../Styles/gerirtarefas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

export const TaskAssign = () => {
    const [users, setUsers] = useState([]);
    const [athletes, setAthletes] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [selectedAthleteId, setSelectedAthleteId] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
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

        fetchUsers();
        fetchAthletes();
    }, []);

    const handleSave = async () => {
        if (!selectedUserId || !selectedAthleteId || !taskDescription) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const newTask = {
            taskId: Math.floor(Math.random() * 1000), // Gera um ID temporário (substitua por um ID único no backend)
            teamId: 1, // Defina o teamId conforme necessário
            athleteId: parseInt(selectedAthleteId),
            userId: parseInt(selectedUserId),
            description: taskDescription,
        };

        try {
            const response = await axios.post('http://localhost:3000/tasks', newTask);
            if (response.status === 201) {
                alert('Tarefa criada com sucesso!');
                navigate('/tarefas'); // Redireciona para a página de gerenciamento de tarefas
            }
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            alert('Erro ao criar tarefa. Tente novamente.');
        }
    };

    const handleCancel = () => {
        navigate('/tarefas'); // Redireciona para a página de gerenciamento de tarefas
    };

    return (
        <div className="task-assign-container">
            <div className="top-bar">
                <div className="top-bar-background">
                    <div className="top-bar-content">
                        <p className="top-bar-title">CRIAR TAREFA</p>
                    </div>
                </div>
            </div>
            <div className='form-form-container'>
                <div className="form-container">
                    <div className="form-group">
                        <label htmlFor="user-select">User</label>
                        <select
                            id="user-select"
                            value={selectedUserId}
                            onChange={(e) => setSelectedUserId(e.target.value)}
                        >
                            <option value="">Escolher user</option>
                            {users.map((user) => (
                                <option key={user.userId} value={user.userId}>
                                    {user.fullName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="player-select">Jogador a ser avaliado</label>
                        <select
                            id="player-select"
                            value={selectedAthleteId}
                            onChange={(e) => setSelectedAthleteId(e.target.value)}
                        >
                            <option value="">Escolher jogador</option>
                            {athletes.map((athlete) => (
                                <option key={athlete.athleteId} value={athlete.athleteId}>
                                    {athlete.fullName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <textarea
                        placeholder="Informação da tarefa..."
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    ></textarea>
                    <div className="buttons">
                        <button className="save-button" onClick={handleSave}>
                            GUARDAR
                        </button>
                        <button className="cancelar-button" onClick={handleCancel}>
                            CANCELAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskAssign;