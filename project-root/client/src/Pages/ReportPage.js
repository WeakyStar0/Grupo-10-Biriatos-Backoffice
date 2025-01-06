import React, { useState } from 'react';
import '../Styles/reportStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const ReportPage = () => {
    const [ratings, setRatings] = useState({
        tecnica: null,
        inteligencia: null,
        velocidade: null,
        altura: null,
        morfologia: null,
        ratingFinal: null,
    });

    const handleSelect = (group, value) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [group]: value,
        }));
    };

    return (
        <div className="report-page-container">
            <div className="header">
                <h1>RELATÓRIO</h1>
                <h2>Jogador 1</h2>
                <div className="team-section">
                    <h3>Equipa profissional</h3>
                    <button className="btn btn-secondary">Voltar</button>
                </div>
            </div>
            <div className="form-section">
                <div className="rating-group">
                    <label>Técnica</label>
                    <div className="options">
                        {[1, 2, 3, 4].map((value) => (
                            <button
                                key={value}
                                className={`btn ${ratings.tecnica === value ? 'btn-dark' : 'btn-light'
                                    }`}
                                onClick={() => handleSelect('tecnica', value)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="rating-group">
                    <label>Inteligência</label>
                    <div className="options">
                        {[1, 2, 3, 4].map((value) => (
                            <button
                                key={value}
                                className={`btn ${ratings.inteligencia === value ? 'btn-dark' : 'btn-light'
                                    }`}
                                onClick={() => handleSelect('inteligencia', value)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="rating-group">
                    <label>Velocidade</label>
                    <div className="options">
                        {[1, 2, 3, 4].map((value) => (
                            <button
                                key={value}
                                className={`btn ${ratings.velocidade === value ? 'btn-dark' : 'btn-light'
                                    }`}
                                onClick={() => handleSelect('velocidade', value)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="rating-group">
                    <label>Altura</label>
                    <div className="options">
                        {['Alto', 'Médio', 'Baixo'].map((value) => (
                            <button
                                key={value}
                                className={`btn ${ratings.altura === value ? 'btn-dark' : 'btn-light'
                                    }`}
                                onClick={() => handleSelect('altura', value)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="rating-group">
                    <label>Morfologia</label>
                    <div className="options">
                        {['Ectomorfo', 'Mesomorfo', 'Endomorfo'].map((value) => (
                            <button
                                key={value}
                                className={`btn ${ratings.morfologia === value ? 'btn-dark' : 'btn-light'
                                    }`}
                                onClick={() => handleSelect('morfologia', value)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="rating-group">
                    <label>Rating final</label>
                    <div className="options">
                        {[1, 2, 3, 4].map((value) => (
                            <button
                                key={value}
                                className={`btn ${ratings.ratingFinal === value ? 'btn-dark' : 'btn-light'
                                    }`}
                                onClick={() => handleSelect('ratingFinal', value)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="observations">
                    <label>Observações</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="buttons">
                    <button className="btn btn-dark">GUARDAR</button>
                    <button className="btn btn-dark">ENVIAR</button>
                </div>
            </div>
            <div style={{ height: '24.4vh' }}></div>
        </div>
    );
};
