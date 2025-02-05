import React from 'react';
import '../Styles/JogadoresPage.css';
import { useNavigate } from 'react-router-dom';

const jogadores = [
    { nome: "Jogador 1", posicao: "Guarda-redes" },
    { nome: "Jogador 1", posicao: "Guarda-redes" },
    { nome: "Jogador 1", posicao: "Guarda-redes" },
    { nome: "Jogador 1", posicao: "Guarda-redes" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Defesas" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Médios" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
    { nome: "Jogador 1", posicao: "Avançados" },
];

const posicoes = [
    { nome: "Guarda-redes", cor: "#C39B44" },
    { nome: "Defesas", cor: "#2C9E8B" },
    { nome: "Médios", cor: "#2B8B39" },
    { nome: "Avançados", cor: "#9F574F" },
];

export default function JogadoresPage() {
    const navigate = useNavigate();

    const handleVoltarClick = () => {
        navigate(-1);  // Voltar para a página anterior
    };

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
                            {jogadores
                                .filter((jogador) => jogador.posicao === posicao.nome)
                                .map((jogador, index) => (
                                    <div
                                        key={index}
                                        className="jogadores-card"
                                        style={{ backgroundColor: posicao.cor }}
                                    >
                                        {jogador.nome}
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
