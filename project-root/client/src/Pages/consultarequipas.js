import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/consultarequipas.css';
import axios from 'axios';

export const ConsultarEquipas = () => {
    const [teams, setTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:3000/teams');
               
                const filteredTeams = response.data.filter(team => team.teamType !== 'Club');
                setTeams(filteredTeams);
            } catch (error) {
                console.error('Erro ao buscar equipes:', error);
            }
        };

        fetchTeams();
    }, []);

    const handleTeamClick = (team) => {
        if (team.teamType === 'Shadow' || team.teamType === 'Own') {
            navigate(`/equipa/${team.teamId}`, { state: { team } });
        }
    };

    return (
        <div className="page-container">
            <div className="top-bar">
                <div className="top-bar-background">
                    <div className="top-bar-content">
                        <p className="top-bar-title">CONSULTAR EQUIPAS</p>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome da Equipa</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map((team, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleTeamClick(team)}
                                    style={{ cursor: team.teamType === 'Shadow' || team.teamType === 'Own' ? 'pointer' : 'default' }}
                                >
                                    <td>{team.teamName}</td>
                                    <td>
                                        {team.teamType === 'Own' ? 'Própria' : 
                                         team.teamType === 'Shadow' ? 'Sombra' : 
                                         'Club'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};