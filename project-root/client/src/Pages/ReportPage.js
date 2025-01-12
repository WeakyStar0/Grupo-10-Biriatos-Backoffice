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

    const [playerRating, setPlayerRating] = useState(null);

    const handleSelect = (group, value) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [group]: value,
        }));
    };

    const handlePlayerRating = (value) => {
        setPlayerRating(value);
    };

    const clearPlayerRating = () => {
        setPlayerRating(null);
    };

    return (
        <div className="report-page-container">
            <div className="header">
                <div className="inner-rectangle">
                    <div className="core-rectangle">
                        <p className="core-text">RELATÓRIO DE JOGADOR 1</p>
                        <div className="player-rating-container">
                            <div className="options">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <button
                                        key={value}
                                        className={`btn ${playerRating === value ? 'btn-dark' : 'btn-light'}`}
                                        onClick={() => handlePlayerRating(value)}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                            <div className="player-rating-buttons">
                                <button className="btn btn-success" onClick={() => alert(`Rating Aceito: ${playerRating}`)}>
                                    Aceitar
                                </button>
                                <button className="btn btn-danger" onClick={clearPlayerRating}>
                                    Apagar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-section">
                <div className="rating-group">
                    <label>Técnica</label>
                    <div className="options">
                        {[1, 2, 3, 4].map((value) => (
                            <button
                                key={value}
                                className={`btn ${ratings.tecnica === value ? 'btn-dark' : 'btn-light'}`}
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
                                className={`btn ${ratings.inteligencia === value ? 'btn-dark' : 'btn-light'}`}
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
                                className={`btn ${ratings.velocidade === value ? 'btn-dark' : 'btn-light'}`}
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
                                className={`btn ${ratings.altura === value ? 'btn-dark' : 'btn-light'}`}
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
                                className={`btn ${ratings.morfologia === value ? 'btn-dark' : 'btn-light'}`}
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
                                className={`btn ${ratings.ratingFinal === value ? 'btn-dark' : 'btn-light'}`}
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
