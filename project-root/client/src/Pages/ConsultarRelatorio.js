import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/gerirtarefas.css';
import axios from 'axios';

export const ConsultarRelatorio = () => {
    const [reports, setReports] = useState([]);
    const [users, setUsers] = useState([]);
    const [athletes, setAthletes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:3000/reports');
                setReports(response.data);
            } catch (error) {
                console.error('Erro ao buscar relatórios:', error);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        const fetchAthletes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/athletes');
                setAthletes(response.data);
            } catch (error) {
                console.error('Erro ao buscar atletas:', error);
            }
        };

        fetchReports();
        fetchUsers();
        fetchAthletes();
    }, []);

    const openReport = (id) => {
        navigate(`/report-page/${id}`);
    };

    const getUserName = (userId) => {
        const user = users.find(user => user.userId === userId);
        return user ? user.fullName : 'Desconhecido';
    };

    const getAthleteName = (athleteId) => {
        const athlete = athletes.find(athlete => athlete.athleteId === athleteId);
        return athlete ? athlete.fullName : 'Desconhecido';
    };

    return (
        <div className="page-container">
            <div className="top-bar">
                <div className="top-bar-background">
                    <div className="top-bar-content">
                        <p className="top-bar-title">RELATÓRIO</p>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Jogador</th>
                                <th>Submissor</th>
                                <th>Texto Livre</th>
                                <th>Avaliação Admin</th> {/* Nova coluna */}
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => (
                                <tr
                                    key={report.reportId}
                                    onClick={() => openReport(report.reportId)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td>{getAthleteName(report.athleteId)}</td>
                                    <td>{getUserName(report.userId)}</td>
                                    <td>{report.freeText}</td>
                                    <td>
                                        {report.adminRating !== undefined && report.adminRating !== null ? (
                                            <span className="admin-rating-highlight">
                                                {report.adminRating}
                                            </span>
                                        ) : (
                                            <span>Não avaliado</span>
                                        )}
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