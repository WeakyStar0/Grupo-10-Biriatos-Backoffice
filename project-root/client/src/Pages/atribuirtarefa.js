import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/atribuirtarefas.css';


  export const AtribuirTarefa = () => {
  return (
    <div className="assign-task-container">
      <header className="header">
        <h1>Atribuir tarefa</h1>
      </header>
      <div className="content">
        <div className="form-section">
          <div className="form-group">
            <label>User</label>
            <select>
              <option>Escolher user</option>
            </select>
          </div>
          <div className="form-group">
            <label>Jogador a ser avaliado</label>
            <select>
              <option>Escolher jogador</option>
            </select>
          </div>
          <div className="form-group">
            <label>Jogo a ser visto</label>
            <select>
              <option>Escolher jogo</option>
            </select>
          </div>
          <div className="form-group">
            <label>Equipe do jogador a ser avaliado</label>
            <select>
              <option>Escolher equipa</option>
            </select>
          </div>
        </div>
        <div className="task-info">
          <textarea placeholder="Informação da tarefa..."></textarea>
        </div>
        <div className="buttons">
          <button className="save-button">GUARDAR</button>
          <button className="cancel-button">CANCELAR</button>
        </div>
      </div>
    </div>
  );
};


