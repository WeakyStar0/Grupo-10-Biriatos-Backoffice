// PlayerCreationPage.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/CriarJogador.css';

export const CriarJogador = () => {
    return (
        <div className="home-container">




        </div>
    );
};

const PlayerCreationPage = () => {
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
    if (Object.values(playerData).some(field => field === '' || field === null)) {
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
      <button className="back-button" onClick={handleBack}>Voltar</button>
      <div className="form-container">
        <div className="photo-upload">
          <input type="file" name="photo" onChange={handleChange} />
          <p>Adicione uma foto</p>
        </div>
        <div className="form-fields">
          <select name="nationality" onChange={handleChange} required>
            <option value="">*Nacionalidade</option>
          </select>
          <select name="gender" onChange={handleChange} required>
            <option value="">*Género</option>
          </select>
          <select name="category" onChange={handleChange} required>
            <option value="">*Escalão</option>
          </select>
          <input type="date" name="birthDate" onChange={handleChange} required />
          <input type="text" name="position" placeholder="*Posição" onChange={handleChange} required />
          <select name="team" onChange={handleChange} required>
            <option value="">*Equipa</option>
          </select>
          <div className="agent-info">
            <input type="text" name="agentContact" placeholder="Agente - contacto" onChange={handleChange} />
            <input type="text" name="agentName" placeholder="Agente - nome" onChange={handleChange} />
          </div>
        </div>
        <input type="text" name="name" placeholder="nome de jogador..." onChange={handleChange} />
        <button className="create-button" onClick={handleSubmit}>Criar jogador</button>
      </div>
    </div>
  );
};

export default PlayerCreationPage;
