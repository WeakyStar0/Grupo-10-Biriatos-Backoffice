import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/JogadoresPage.css';

const posicoes = [
  { nome: "Guarda-redes", cor: "#C39B44" },
  { nome: "Defesa", cor: "#2C9E8B" },
  { nome: "Médio", cor: "#2B8B39" },
  { nome: "Avançado", cor: "#9F574F" },
];

const JogadoresPage = () => {
  const [jogadores, setJogadores] = useState([]);
  const { teamId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJogadores = async () => {
      try {
        const response = await fetch(`http://localhost:3000/athletes/team/${teamId}`);
        const data = await response.json();
        setJogadores(data);
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };

    fetchJogadores();
  }, [teamId]);

  const handleVoltarClick = () => {
    navigate(-1);  // Voltar para a página anterior
  };

  const categorizedJogadores = jogadores.reduce((acc, jogador) => {
    const position = jogador.position;
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(jogador);
    return acc;
  }, {});

  return (
    <div>
      <div className="tira-preta">
        <button className="jogadores-button" onClick={handleVoltarClick}>Voltar</button>
      </div>
      <div className="tira-branca"></div>
      <div className="tira-preta2"></div>
      <div className='jogadores-header' style={{ height: '12vh' }}></div>
      <div className="jogadores-container">
        <div className="jogadores-header">
          <div className="logo-top-text">
            <h1>Viriatos Scouting</h1>
            <h2>JOGADORES</h2>
          </div>
        </div>
        {posicoes.map((posicao) => (
          <div key={posicao.nome} className="jogadores-position-section">
            <h2>{posicao.nome}</h2>
            <div className="jogadores-grid">
              {categorizedJogadores[posicao.nome]?.map((jogador, index) => (
                <div
                  key={index}
                  className="jogadores-card"
                  style={{ backgroundColor: posicao.cor }}
                >
                  {jogador.fullName}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JogadoresPage;