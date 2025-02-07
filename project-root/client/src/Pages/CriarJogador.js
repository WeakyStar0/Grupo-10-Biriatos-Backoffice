import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../Styles/CriarJogador.css";
import axios from 'axios';
import gkimg from '../img/vector-GK.svg';
import avimg from '../img/vector-AV.svg';
import dfimg from '../img/vector-DF.svg';
import mdimg from '../img/vector-MD.svg';

const CriarJogador = () => {
  const [playerData, setPlayerData] = useState({
    fullName: "",
    nationality: "",
    gender: "",
    birthDate: "",
    position: "",
    teamId: "",
    agentName: "",
    agentContact: "",
  });

  const [teams, setTeams] = useState([]); // Estado para armazenar as equipas do tipo "Club"
  const [countries, setCountries] = useState([]); // Estado para armazenar a lista de países
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento

  // Busca as equipas do tipo "Club" e a lista de países ao carregar o componente
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:3000/teams');
        const clubTeams = response.data.filter(team => team.teamType === 'Club'); // Filtra apenas as equipas do tipo "Club"
        setTeams(clubTeams);
      } catch (error) {
        console.error('Erro ao buscar equipas:', error);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map(country => country.name.common).sort(); // Ordena os países alfabeticamente
        setCountries(countryNames);
      } catch (error) {
        console.error('Erro ao buscar países:', error);
      }
    };

    fetchTeams();
    fetchCountries();
    setIsLoading(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerData({
      ...playerData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // Validação dos campos obrigatórios
    if (Object.values(playerData).some((field) => field === "" || field === null)) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      // Cria o agente primeiro
      const agentResponse = await axios.post('http://localhost:3000/agents', {
        agentId: Math.floor(Math.random() * 1000), // Gera um ID temporário
        agentName: playerData.agentName,
        contactInfo: playerData.agentContact,
      });

      const agentId = agentResponse.data.agentId; // ID do agente criado

      // Cria o jogador
      const athleteResponse = await axios.post('http://localhost:3000/athletes', {
        athleteId: Math.floor(Math.random() * 1000), // Gera um ID temporário
        fullName: playerData.fullName,
        dateOfBirth: new Date(playerData.birthDate).toISOString(),
        nationality: playerData.nationality,
        position: playerData.position,
        gender: playerData.gender,
        teamId: parseInt(playerData.teamId),
        agentId: agentId,
      });

      console.log('Jogador criado:', athleteResponse.data);
      alert('Jogador criado com sucesso!');
      setPlayerData({
        fullName: "",
        nationality: "",
        gender: "",
        birthDate: "",
        position: "",
        teamId: "",
        agentName: "",
        agentContact: "",
      });
    } catch (error) {
      console.error('Erro ao criar jogador ou agente:', error);
      alert('Erro ao criar jogador. Tente novamente.');
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  // Função para renderizar o SVG com base na posição selecionada
  const renderPositionSVG = () => {
    switch (playerData.position) {
      case 'Guarda-Redes':
        return (
          <img
          src={gkimg}
          alt="Defesa"
          style={{ width: '120%', height: '120%' }}
      />
        );
      case 'Defesa':
        return (
          <img
          src={dfimg}
          alt="Defesa"
          style={{ width: '120%', height: '120%' }}
      />
        );
      case 'Médio':
        return (
          <img
          src={mdimg}
          alt="Defesa"
          style={{ width: '120%', height: '120%' }}
      />
        );
      case 'Avançado':
        return (
          <img
          src={avimg}
          alt="Defesa"
          style={{ width: '120%', height: '120%' }}
      />
        );
      default:
        return (
          <svg width="00" height="00" viewBox="0 0 100 100">
          {/* SVG padrão */}
          <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="gray" />
      </svg>
        );
    }
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
              {renderPositionSVG()} 
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
              <select
                name="nationality"
                value={playerData.nationality}
                onChange={handleChange}
                required
              >
                <option value="">*Nacionalidade</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <select
                name="gender"
                value={playerData.gender}
                onChange={handleChange}
                required
              >
                <option value="">*Género</option>
                <option value="Male">Masculino</option>
                <option value="Female">Feminino</option>
                <option value="Other">Outro</option>
              </select>

              <div className="create-player-birth">
                <input
                  type="date"
                  name="birthDate"
                  value={playerData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <select
                name="position"
                value={playerData.position}
                onChange={handleChange}
                required
              >
                <option value="">*Posição</option>
                <option value="Guarda-Redes">Guarda-redes</option>
                <option value="Defesa">Defesa</option>
                <option value="Médio">Médio</option>
                <option value="Avançado">Avançado</option>
              </select>

              <select
                name="teamId"
                value={playerData.teamId}
                onChange={handleChange}
                required
                disabled={isLoading}
              >
                <option value="">*Equipa</option>
                {teams.map((team) => (
                  <option key={team.teamId} value={team.teamId}>
                    {team.teamName}
                  </option>
                ))}
              </select>

              <div className="create-player-agent">
                <div className="create-agent-title">Agente</div>
                <div className="create-agent-inputs">
                  <input
                    className="create-agent-input"
                    type="text"
                    name="agentContact"
                    placeholder="Contacto"
                    value={playerData.agentContact}
                    onChange={handleChange}
                  />
                  <input
                    className="create-agent-input"
                    type="text"
                    name="agentName"
                    placeholder="Nome"
                    value={playerData.agentName}
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
            name="fullName"
            placeholder="Nome do jogador..."
            value={playerData.fullName}
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