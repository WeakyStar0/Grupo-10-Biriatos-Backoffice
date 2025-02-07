import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/CriarEquipas.css';
import '../Styles/gerirtarefas.css';
import CampoSvg from '../img/Campo.svg';
import axios from 'axios';

export const CriarEquipas = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedPlayerId, setSelectedPlayerId] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [teamType, setTeamType] = useState('Própria'); // Estado para o tipo de equipa
    const [teamName, setTeamName] = useState(''); // Estado para o nome da equipa
    const [addedPlayers, setAddedPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/athletes');
                setPlayers(response.data);
            } catch (error) {
                console.error('Erro ao buscar jogadores:', error);
            }
        };

        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://localhost:3000/teams');
                setTeams(response.data);
            } catch (error) {
                console.error('Erro ao buscar equipes:', error);
            }
        };

        fetchPlayers();
        fetchTeams();
    }, []);

    const handleAddPlayer = () => {
        if (!selectedPlayerId || !selectedPosition) {
            alert('Por favor, selecione um jogador e uma posição.');
            return;
        }

        const player = players.find(p => p.athleteId === parseInt(selectedPlayerId));
        if (player) {
            // Verifica se o jogador já foi adicionado
            if (addedPlayers.some(p => p.athleteId === player.athleteId)) {
                alert('Este jogador já foi adicionado à equipe.');
                return;
            }

            const positionCount = addedPlayers.filter(p => p.position === selectedPosition).length;
            const maxPlayers = selectedPosition === 'Guarda-redes' ? 2 : 5;

            if (positionCount >= maxPlayers) {
                alert(`Você só pode adicionar ${maxPlayers} jogadores na posição de ${selectedPosition}.`);
                return;
            }

            const newPlayer = { ...player, position: selectedPosition };
            setAddedPlayers([...addedPlayers, newPlayer]);
            setSelectedPlayer(newPlayer);
            setSelectedPlayerId('');
            setSelectedPosition('');
        }
    };

    const handleSaveTeam = async () => {
        if (!teamName || (teamType === 'Sombra' && addedPlayers.length === 0)) {
            alert('Por favor, preencha o nome da equipe e adicione pelo menos um jogador.');
            return;
        }
    
        const newTeam = {
            teamId: Math.floor(Math.random() * 1000), // Gera um ID temporário (substitua por um ID único no backend)
            teamName: teamName,
            teamType: teamType === 'Própria' ? 'Own' : 'Shadow', // Salva como "Own" ou "Shadow"
            tasks: [],
            players: addedPlayers.map(player => player.athleteId),
        };
    
        try {
            const response = await axios.post('http://localhost:3000/teams', newTeam);
            if (response.status === 201) {
                alert('Equipe criada com sucesso!');
                setTeamName('');
                setAddedPlayers([]);
                setSelectedPlayer(null);
            }
        } catch (error) {
            console.error('Erro ao criar equipe:', error);
            alert('Erro ao criar equipe. Tente novamente.');
        }
    };

    const handleCancel = () => {
        setTeamName('');
        setAddedPlayers([]);
        setSelectedPlayer(null);
    };

    const handleTeamTypeChange = (type) => {
        setTeamType(type);
        setTeamName('');
        setAddedPlayers([]); // Limpa os jogadores ao trocar o tipo de equipa
    };

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
        fw: { top: '20%', leftStart: 23, step: 12 }  // Avançado
    };

    return (
        <div className="home-container">
            <div className="top-bar">
                <div className="top-bar-background">
                    <div className="top-bar-content">
                        <p className="top-bar-title">CRIAR EQUIPA</p>
                    </div>
                </div>
            </div>
            <div style={{ height: '0vh' }}></div>
            <div className="create-team-page">
                <div className="team-form">
                    <div className="form-controls">
                        <div className="control-group">
                            <label>Tipo de equipa:</label>
                            <button
                                className={`btn ${teamType === 'Própria' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => handleTeamTypeChange('Própria')}
                            >
                                Própria
                            </button>
                            <button
                                className={`btn ${teamType === 'Sombra' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => handleTeamTypeChange('Sombra')}
                            >
                                Sombra
                            </button>
                        </div>
                        <div className="control-group">
                            <label>Nome da Equipa:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nome da equipa..."
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                        </div>
                        {teamType === 'Sombra' && (
                            <>
                                <div className="control-group">
                                    <label>Equipa:</label>
                                    <select
                                        className="form-select"
                                        value={selectedTeam}
                                        onChange={(e) => setSelectedTeam(e.target.value)}
                                    >
                                        <option value="">Selecione uma equipa...</option>
                                        {teams.map((team) => (
                                            <option key={team.teamId} value={team.teamId}>
                                                {team.teamName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="control-group">
                                    <label>Jogador:</label>
                                    <select
                                        className="form-select"
                                        value={selectedPlayerId}
                                        onChange={(e) => setSelectedPlayerId(e.target.value)}
                                    >
                                        <option value="">Selecione um jogador...</option>
                                        {players
                                            .filter(player => player.teamId === parseInt(selectedTeam))
                                            .map((player) => (
                                                <option key={player.athleteId} value={player.athleteId}>
                                                    {player.fullName}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div className="control-group">
                                    <label>Posição:</label>
                                    <select
                                        className="form-select"
                                        value={selectedPosition}
                                        onChange={(e) => setSelectedPosition(e.target.value)}
                                    >
                                        <option value="">Selecione uma posição...</option>
                                        <option value="Guarda-redes">Guarda-redes</option>
                                        <option value="Defesa">Defesa</option>
                                        <option value="Médio">Médio</option>
                                        <option value="Avançado">Avançado</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary mt-2" onClick={handleAddPlayer}>
                                    Adicionar
                                </button>
                                {addedPlayers.length > 0 && (
                                    <div className="mt-2">
                                        <h5>Jogadores Adicionados:</h5>
                                        <ul>
                                            {addedPlayers.map((player, index) => (
                                                <li key={index}>
                                                    {player.fullName} - {player.position}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className="field-preview">
                        <img src={CampoSvg} alt="Campo de futebol" className="field-image" />
                        <div className="playersField">
                            {addedPlayers.map((player, index) => {
                                const positionCategory = getPositionCategory(player.position);
                                const pos = positions[positionCategory];
                                const playerIndex = addedPlayers
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
                <div className="buttons">
                    <button className="btn btn-danger" onClick={handleCancel}>
                        Cancelar
                    </button>
                    <button className="btn btn-success" onClick={handleSaveTeam}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};