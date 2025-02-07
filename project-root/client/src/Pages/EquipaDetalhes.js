import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export const EquipaDetalhes = () => {
    const location = useLocation();
    const { team } = location.state;
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/athletes?teamId=${team.teamId}`);
                setPlayers(response.data);
            } catch (error) {
                console.error('Erro ao buscar jogadores:', error);
            }
        };

        fetchPlayers();
    }, [team.teamId]);

    return (
        <div>
            <h1>Detalhes da Equipa {team.teamName}</h1>
            <h2>Jogadores:</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.fullName} - {player.position}
                    </li>
                ))}
            </ul>
        </div>
    );
};