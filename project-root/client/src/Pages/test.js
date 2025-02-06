import React, { useState, useEffect } from "react";

function Test() {
    const [report, setReport] = useState(null); // Estado para armazenar o relatório
    const [error, setError] = useState(null);  // Estado para armazenar erros
    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/reports/1");
                console.log('Resposta recebida:', response);  // Verificar a resposta
                if (!response.ok) {
                    throw new Error("Erro ao obter o relatório");
                }
                const data = await response.json();
                console.log('Dados do relatório:', data);  // Verificar os dados
                setReport(data);
            } catch (err) {
                console.error('Erro ao obter o relatório:', err); // Log do erro
                setError(err.message);
            }
        };
        fetchReport();
    }, []);
    if (error) {
        return <div>Erro: {error}</div>; // Mostra erro, se houver
    }
    if (!report) {
        return <div>A carregar...</div>; // Mostra mensagem enquanto carrega
    }
    return (
        <div>
            <h1>Relatório</h1>
            <p><strong>ID:</strong> {report.reportId}</p>
            <p><strong>ID do Atleta:</strong> {report.athleteId}</p>
            <p><strong>Usuário:</strong> {report.userId}</p>
            <p><strong>Técnica:</strong> {report.technical}</p>
            <p><strong>Velocidade:</strong> {report.speed}</p>
            <p><strong>Atitude Competitiva:</strong> {report.competitiveAttitude}</p>
            <p><strong>Inteligência:</strong> {report.intelligence}</p>
            <p><strong>Altura:</strong> {report.height}</p>
            <p><strong>Morfologia:</strong> {report.morphology}</p>
            <p><strong>Avaliação Final:</strong> {report.finalRating}</p>
            <p><strong>Comentários:</strong> {report.freeText}</p>
        </div>
    );
}

export default Test;
