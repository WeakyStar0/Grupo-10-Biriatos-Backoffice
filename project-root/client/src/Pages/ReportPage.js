import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/reportStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

export const ReportPage = () => {
    const { reportId } = useParams();
    const navigate = useNavigate();
    const [report, setReport] = useState(null);
    const [athleteName, setAthleteName] = useState('');
    const [playerRating, setPlayerRating] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                // Busca o relatório pelo ID
                const reportResponse = await axios.get(`http://localhost:3000/reports/${reportId}`);
                setReport(reportResponse.data);
                // Busca o nome do atleta usando o athleteId do relatório
                const athleteResponse = await axios.get(`http://localhost:3000/athletes/${reportResponse.data.athleteId}`);
                setAthleteName(athleteResponse.data.fullName);
            } catch (error) {
                console.error('Erro ao buscar relatório ou atleta:', error);
            }
        };
        fetchReport();
    }, [reportId]);

    const handlePlayerRating = (value) => {
        setPlayerRating(value);
    };

    const clearPlayerRating = () => {
        setPlayerRating(null);
    };

    const handleAdminRating = async () => {
        if (playerRating === null) {
            alert('Por favor, selecione uma nota antes de aceitar.');
            return;
        }

        // Verifica se o relatório já possui adminRating
        if (report.adminRating !== undefined && report.adminRating !== null) {
            alert('Este relatório já foi avaliado. Não é possível atualizar a nota.');
            return;
        }

        try {
            // Atualiza o relatório com a nova nota do admin
            const updatedReport = { ...report, adminRating: playerRating };
            await axios.put(`http://localhost:3000/reports/${reportId}`, updatedReport);
            setReport(updatedReport);
            alert(`Nota ${playerRating} enviada com sucesso!`);
            navigate(-1); // Navega para a página anterior
        } catch (error) {
            console.error('Erro ao enviar a nota do admin:', error);
            alert('Erro ao enviar a nota do admin.');
        }
    };

    const translateHeight = (height) => {
        switch (height) {
            case 'High':
                return 'Alto';
            case 'Medium':
                return 'Médio';
            case 'Low':
                return 'Baixo';
            default:
                return height;
        }
    };

    const translateMorphology = (morphology) => {
        switch (morphology) {
            case 'Ectomorph':
                return 'Ectomorfo';
            case 'Mesomorph':
                return 'Mesomorfo';
            case 'Endomorph':
                return 'Endomorfo';
            default:
                return morphology;
        }
    };

    if (!report) {
        return <div>Carregando..</div>;
    }

    return (
        <div className="report-page-container">
            <div className="header">
                <div className="inner-rectangle">
                    <div className="core-rectangle">
                        <p className="core-text">RELATÓRIO DE {athleteName.toUpperCase()}</p>
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
                                <button className="btn btn-success" onClick={handleAdminRating}>
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
                                className={`btn ${report.technical === value ? 'btn-dark' : 'btn-light'}`}
                                disabled
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
                                className={`btn ${report.intelligence === value ? 'btn-dark' : 'btn-light'}`}
                                disabled
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
                                className={`btn ${report.speed === value ? 'btn-dark' : 'btn-light'}`}
                                disabled
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="rating-group">
                    <label>Altura</label>
                    <div className="options">
                        {['High', 'Medium', 'Low'].map((value) => (
                            <button
                                key={value}
                                className={`btn ${report.height === value ? 'btn-dark' : 'btn-light'}`}
                                disabled
                            >
                                {translateHeight(value)}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="rating-group">
                    <label>Morfologia</label>
                    <div className="options">
                        {['Ectomorph', 'Mesomorph', 'Endomorph'].map((value) => (
                            <button
                                key={value}
                                className={`btn ${report.morphology === value ? 'btn-dark' : 'btn-light'}`}
                                disabled
                            >
                                {translateMorphology(value)}
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
                                className={`btn ${report.finalRating === value ? 'btn-dark' : 'btn-light'}`}
                                disabled
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="observations">
                    <label>Observações</label>
                    <textarea className="form-control" rows="3" value={report.freeText} readOnly></textarea>
                </div>
            </div>
            <div style={{ height: '24.4vh' }}></div>
        </div>
    );
};