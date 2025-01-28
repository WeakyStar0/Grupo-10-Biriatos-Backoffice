import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/CriarJogador.css';

const CriarJogador = () => {
  const [playerData, setPlayerData] = useState({
    name: '',
    nationality: '',
    gender: '',
    category: '',
    birthDate: '',
    position: '',
    team: '',
    agentContact: '',
    agentName: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPlayerData({
      ...playerData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    if (Object.values(playerData).some((field) => field === '' || field === null)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    console.log('Jogador criado:', playerData);
    alert('Jogador criado com sucesso!');
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="player-creation-container">
      <button className="back-button" onClick={handleBack}>
        Voltar
      </button>
      <div className="form-container">
        <div className="photo-upload">
          <input type="file" name="photo" onChange={handleChange} />
          <p>Adicione uma foto</p>
        </div>
        <div className="form-fields">
          <select name="nationality" onChange={handleChange} required>
            <option value="">*Nacionalidade</option>
            <option value="Portugal">Portugal</option>
            <option value="Brasil">Brasil</option>
            {/* Adicione mais nacionalidades aqui */}
          </select>
          <select name="gender" onChange={handleChange} required>
            <option value="">*Género</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
          <select name="category" onChange={handleChange} required>
            <option value="">*Escalão</option>
            <option value="Sub-18">Sub-18</option>
            <option value="Sub-21">Sub-21</option>
            {/* Adicione mais escalões aqui */}
          </select>
          <input type="date" name="birthDate" onChange={handleChange} required />
          <input type="text" name="position" placeholder="*Posição" onChange={handleChange} required />
          <select name="team" onChange={handleChange} required>
            <option value="">*Equipa</option>
            <option value="Equipa A">Equipa A</option>
            <option value="Equipa B">Equipa B</option>
            {/* Adicione mais equipas aqui */}
          </select>
          <div className="agent-info">
            <input type="text" name="agentContact" placeholder="Agente - contacto" onChange={handleChange} />
            <input type="text" name="agentName" placeholder="Agente - nome" onChange={handleChange} />
          </div>
        </div>
        <input type="text" name="name" placeholder="nome de jogador..." onChange={handleChange} />
        <button className="create-button" onClick={handleSubmit}>
          Criar jogador
        </button>
      </div>
    </div>
  );
};

export default CriarJogador;
