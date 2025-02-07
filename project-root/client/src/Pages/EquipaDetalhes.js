import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CampoSvg from '../img/Campo.svg'; // Importe a imagem do campo

export const EquipaDetalhes = () => {
    const location = useLocation();
    const { team } = location.state;
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                // Busca os jogadores da equipa com base nos IDs e posições salvos
                const playersData = await Promise.all(
                    team.players.map(async (player) => {
                        const response = await axios.get(`http://localhost:3000/athletes/${player.athleteId}`);
                        return { ...response.data, position: player.position };
                    })
                );
                setPlayers(playersData);
            } catch (error) {
                console.error('Erro ao buscar jogadores:', error);
            }
        };

        fetchPlayers();
    }, [team]);

    const getPositionCategory = (position) => {
        switch (position) {
            case 'Guarda-redes':
                return 'gk';
            case 'Defesa':
                return 'df';
            case 'Médio':
                return 'md';
            case 'Avançado':
                return 'fw';
            default:
                return 'unknown';
        }
    };

    const positions = {
        gk: { top: '85%', leftStart: 37, step: 20 }, // Guarda-redes
        df: { top: '55%', leftStart: 23, step: 12 }, // Defesa
        md: { top: '38%', leftStart: 23, step: 12 }, // Médio
        fw: { top: '20%', leftStart: 23, step: 12 }, // Avançado
    };

    return (
        <div className="home-container">
            <div className="top-bar">
                <div className="top-bar-background">
                    <div className="top-bar-content">
                        <p className="top-bar-title">DETALHES DA EQUIPA {team.teamName}</p>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="field-preview">
                    <img src={CampoSvg} alt="Campo de futebol" className="field-image" />
                    <div className="playersField">
                        {players.map((player, index) => {
                            const positionCategory = getPositionCategory(player.position);
                            const pos = positions[positionCategory];
                            const playerIndex = players
                                .filter(p => p.position === player.position)
                                .findIndex(p => p.athleteId === player.athleteId);

                            return (
                                <div
                                    key={player.athleteId}
                                    className={`player ${positionCategory}`}
                                    style={{
                                        top: pos.top,
                                        left: `${pos.leftStart + playerIndex * pos.step}%`,
                                    }}
                                >
                                    <div className="player-info">
                                        <p><strong>Nome:</strong> {player.fullName}</p>
                                        <p><strong>Posição:</strong> {player.position}</p>
                                        <p><strong>Nacionalidade:</strong> {player.nationality}</p>
                                        <p><strong>Data de Nascimento:</strong> {new Date(player.dateOfBirth).toLocaleDateString()}</p>
                                    </div>
                                    {player.fullName}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};