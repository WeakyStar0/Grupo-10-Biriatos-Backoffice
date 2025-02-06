import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../Styles/CriarJogador.css";

const CriarJogador = () => {
  const [playerData, setPlayerData] = useState({
    name: "",
    nationality: "",
    gender: "",
    category: "",
    birthDate: "",
    position: "",
    team: "",
    agentContact: "",
    agentName: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPlayerData({
      ...playerData,
      [name]: files ? files[0] : value,
    });
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = () => {
    if (Object.values(playerData).some((field) => field === "" || field === null)) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    console.log("Jogador criado:", playerData);
    alert("Jogador criado com sucesso!");
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="create-player-page-body">
      <div className="create-player-page-container">
        <button className="create-player-back-button" onClick={handleBack}>
          Voltar
        </button>

        <div className="create-player-main-frame">
          <div className="create-player-left-frame">
            <div className="create-player-photo-upload">
              <input type="file" name="photo" onChange={handleChange} />
              <p>Adicione uma foto</p>
            </div>
          </div>

          <div className="create-player-divider">
            <div className="create-player-divider-outer">
              <div className="create-player-divider-border">
                <div className="create-player-divider-main"></div>
              </div>
            </div>
          </div>

          <div className="create-player-right-frame">
            <div className="create-player-info">
              <select name="nationality" onChange={handleChange} required>
                <option value="">*Nacionalidade</option>
                <option value="Portugal">Portugal</option>
                <option value="Brasil">Brasil</option>
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
              </select>

              <div className="create-player-birth">
                <input
                  type="date"
                  name="birthDate"
                  onChange={handleChange}
                  required
                />
                {playerData.birthDate && (
                  <span>{calculateAge(playerData.birthDate)} anos</span>
                )}
              </div>

              <select name="position" onChange={handleChange} required>
                <option value="">*Posição</option>
                <option value="Guarda-Redes">Guarda-redes</option>
                <option value="Defesa">Defesa</option>
                <option value="Médio">Médio</option>
                <option value="Avançado">Avançado</option>
              </select>

              <select name="team" onChange={handleChange} required>
                <option value="">*Equipa</option>
                <option value="Equipa A">Equipa A</option>
                <option value="Equipa B">Equipa B</option>
              </select>

              <div className="create-player-agent">
                <div className="create-agent-title">Agente</div>
                <div className="create-agent-inputs">
                  <input
                    className="create-agent-input"
                    type="text"
                    name="agentContact"
                    placeholder="Contacto"
                    onChange={handleChange}
                  />
                  <input
                    className="create-agent-input"
                    type="text"
                    name="agentName"
                    placeholder="Nome"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="create-player-footer">
          <input
            className="create-player-name"
            type="text"
            name="name"
            placeholder="nome de jogador..."
            onChange={handleChange}
          />
          <button className="create-player-create-button" onClick={handleSubmit}>
            Criar jogador
          </button>
        </div>
      </div>
    </div>
  );
};

export default CriarJogador;
