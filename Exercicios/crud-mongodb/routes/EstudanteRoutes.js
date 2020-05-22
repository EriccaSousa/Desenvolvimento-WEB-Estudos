var express = require('express');
var router = express.Router();
var EstudanteService = require('../services/EstudanteService');

router.get('/list', function (req, res, next) {
    EstudanteService.list(req, res);
});

router.post('/register', function (req, res, next) {
    EstudanteService.register(req, res);
});

router.put('/update/:id', function (req, res, next) {
    EstudanteService.update(req, res);
});

router.delete('/delete/:id', function (req, res, next) {
    EstudanteService.delete(req, res);
});

router.get('/retrieve/:id', function (req, res, next) {
    EstudanteService.retrieve(req, res);
});

module.exports = router;