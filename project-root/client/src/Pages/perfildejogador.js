import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/perfildejogador.css";
import gkimg from '../img/vector-GK.svg';
import avimg from '../img/vector-AV.svg';
import dfimg from '../img/vector-DF.svg';
import mdimg from '../img/vector-MD.svg';

const PerfilDeJogador = () => {
  const { athleteId } = useParams();
  const [jogador, setJogador] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJogador = async () => {
      try {
        // Buscar detalhes do jogador
        const response = await fetch(`http://localhost:3000/athletes/${athleteId}`);
        const data = await response.json();
        setJogador(data);

        // Buscar nome da equipe e escalão
        const teamResponse = await fetch(`http://localhost:3000/teams?teamId=${data.teamId}`);
        const teamData = await teamResponse.json();
        
        // Verificar se a equipe foi encontrada
        if (teamData.length > 0) {
          const team = teamData.find(team => team.teamId === data.teamId); // Filtra pelo teamId correto
          if (team) {
            setJogador(prevState => ({
              ...prevState,
              teamName: team.teamName, // Adiciona o nome da equipe ao estado do jogador
              escalao: team.escalao // Adiciona o escalão da equipe ao estado do jogador
            }));
          }
        }

        // Buscar informações do agente
        const agentResponse = await fetch(`http://localhost:3000/agents?agentId=${data.agentId}`);
        const agentData = await agentResponse.json();
        
        // Verificar se o agente foi encontrado
        if (agentData.length > 0) {
          setJogador(prevState => ({
            ...prevState,
            agentName: agentData[0].agentName, // Adiciona o nome do agente ao estado do jogador
            agentContact: agentData[0].contactInfo // Adiciona o contato do agente ao estado do jogador
          }));
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes do jogador, equipe ou agente:', error);
      }
    };

    fetchJogador();
  }, [athleteId]);

  const handleVoltarClick = () => {
    navigate(-1);  // Voltar para a página anterior
  };

  if (!jogador) {
    return <div>Carregando...</div>;
  }

  const getSVGPath = (position) => {
    switch (position) {
      case "Guarda-redes":
        return (
          <img
            src={gkimg}
            alt="Guarda-redes"
            style={{ width: '120%', height: '120%' }}
          />
        );
      case "Defesa":
        return (
          <img
            src={dfimg}
            alt="Defesa"
            style={{ width: '120%', height: '120%' }}
          />
        );
      case "Médio":
        return (
          <img
            src={mdimg}
            alt="Médio"
            style={{ width: '120%', height: '120%' }}
          />
        );
      case "Avançado":
        return (
          <img
            src={avimg}
            alt="Avançado"
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

  // Verifica se a nacionalidade é válida para a API de bandeiras
  const getFlagUrl = (nationality) => {
    if (!nationality) return ""; // Retorna vazio se não houver nacionalidade
    const countryCode = nationality.toLowerCase();
    return `https://flagcdn.com/${countryCode}.svg`;
  };

  return (
    <div className="player-page-body">
      <div className="player-page-container">
        <button className="player-back-button" onClick={handleVoltarClick}>Voltar</button>

        <div className="player-main-frame">
          <div className="player-left-frame">
            {getSVGPath(jogador.position)}
          </div>

          <div className="player-divider">
            <div className="player-divider-outer">
              <div className="player-divider-border">
                <div className="player-divider-main"></div>
              </div>
            </div>
          </div>

          <div className="player-right-frame">
            <div className="player-info">
              <div className="player-country">
                <img
                  className="player-flag"
                  src={getFlagUrl(jogador.nationality)}
                  alt={`Bandeira de ${jogador.nationality}`}
                  onError={(e) => {
                    e.target.style.display = "none"; // Oculta a imagem se não carregar
                  }}
                />
                <span>{jogador.nationality}</span>
              </div>
              <div className="player-gender">{jogador.gender === "Male" ? "M ♂" : "F ♀"}</div>
              <hr />
              <div className="player-professional">{jogador.escalao || "Equipa Profissional"}</div>
              <hr />
              <div className="player-age">{`${new Date().getFullYear() - new Date(jogador.dateOfBirth).getFullYear()} anos (${new Date(jogador.dateOfBirth).toLocaleDateString()})`}</div>
              <hr />
              <div className="player-position">{jogador.position}</div>
              <hr />
              <div className="player-club">{jogador.teamName || "Equipa não encontrada"}</div>
              <hr />
            </div>
          </div>
        </div>
        <button className="perfil-de-jogador-voltar-button" onClick={handleVoltarClick}>Voltar</button>

        {/* Footer */}
        <div className="player-footer">
          <span className="player-name">{jogador.fullName}</span>
          <button className="player-manage-button">Gerir Jogador</button>
        </div>
      </div>
    </div>
  );
};

export default PerfilDeJogador;