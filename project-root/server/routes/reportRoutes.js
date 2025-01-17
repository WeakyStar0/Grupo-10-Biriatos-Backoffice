const express = require('express');
const router = express.Router();
const Report = require('../models/reportModel'); // Model do MongoDB
const cors = require('cors');

// Rota para obter todos os relatórios
router.get('/reports', async (req, res) => {
    try {
        const reports = await Report.find();  // Obter todos os relatórios
        console.log('Relatórios encontrados:', reports);

        if (reports.length === 0) {
            return res.status(404).json({ message: 'Nenhum relatório encontrado' });
        }

        res.json(reports);
    } catch (err) {
        console.error('Erro ao buscar os relatórios:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

// Rota para obter um relatório específico pelo ID
router.get('/reports/:id', async (req, res) => {
    const reportId = Number(req.params.id); // Garantir que o id é um número
    console.log('Procurando relatório com ID:', reportId);

    try {
        // Procurar o relatório com o ID fornecido
        const report = await Report.findOne({ reportId: { $eq: reportId } });
        console.log('Relatório encontrado:', report);

        if (!report) {
            return res.status(404).json({ message: 'Relatório não encontrado' });
        }

        res.json(report);
    } catch (err) {
        console.error('Erro ao buscar o relatório:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

module.exports = router;
