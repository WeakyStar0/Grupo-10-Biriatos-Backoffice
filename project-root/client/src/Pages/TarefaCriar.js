import React from 'react';
import '../Styles/TaskCreate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

export const TaskAssign = () => {
    return (
        <div className="task-assign-container">
            <div className="header">
                <h1>Atribuir tarefa</h1>
            </div>
            <div className="form-container">
                <div className="form-group">
                    <label htmlFor="user-select">User</label>
                    <select id="user-select">
                        <option>Escolher user</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="player-select">Jogador a ser avaliado</label>
                    <select id="player-select">
                        <option>Escolher jogador</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="team-select">Jogo a ser visto</label>
                    <select id="team-select">
                        <option>Escolher equipa</option>
                    </select>
                </div>
                <textarea placeholder="Informação da tarefa..."></textarea>
                <div className="buttons">
                    <button className="save-button">GUARDAR</button>
                    <button className="cancel-button">CANCELAR</button>
                </div>
            </div>
        </div>
    );
};

export default TaskAssign;