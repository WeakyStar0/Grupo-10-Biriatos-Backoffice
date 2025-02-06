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
        // Função para buscar os relatórios da API
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:3000/reports');
                setReports(response.data);
            } catch (error) {
                console.error('Erro ao buscar relatórios:', error);
            }
        };

        // Função para buscar os usuários da API
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        // Função para buscar os atletas da API
        const fetchAthletes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/athletes');
                console.log('Resposta da API (Atletas):', response.data); // Depuração
                setAthletes(response.data);
            } catch (error) {
                console.error('Erro ao buscar atletas:', error); // Depuração
            }
        };

        fetchReports();
        fetchUsers();
        fetchAthletes();
    }, []);

    const openReport = (id) => {
        navigate(`/create-report/${id}`);
    };

    // Função para obter o nome do usuário com base no userId
    const getUserName = (userId) => {
        const user = users.find(user => user.userId === userId);
        return user ? user.fullName : 'Desconhecido';
    };

    // Função para obter o nome do atleta com base no athleteId
    const getAthleteName = (athleteId) => {
        console.log('Buscando atleta com ID:', athleteId, 'Tipo:', typeof athleteId); // Depuração
        const athlete = athletes.find(athlete => athlete.athleteId === athleteId);
        console.log('Atleta encontrado:', athlete); // Depuração
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};