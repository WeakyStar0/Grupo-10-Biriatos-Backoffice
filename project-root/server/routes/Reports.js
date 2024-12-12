const express = require('express');
const Report = require('../models/model.report');

const router = express.Router();

// Criar um novo relatório
router.post('/', async (req, res) => {
    try {
        const newReport = new Report(req.body);
        await newReport.save();
        res.status(201).json(newReport);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Buscar todos os relatórios
router.get('/', async (req, res) => {
    try {
        const reports = await Report.find();
        res.status(200).json(reports);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
