var raw = require('../model/raw_queries');
var express = require('express');
var fs = require('fs');
var models = require('../model'); 
var router = express.Router();

router.get('/getPdfData/:iden_pac', function(req, res) {   
    var user = raw.getPdfData(req, res);      
});  

router.get('/getPdfMedicamentos/:Id_ValSegEnf', function(req, res) {      
    var user = raw.getPdfMedicamentos(req, res);  
});

router.get('/getPdfValoracion/:Id_ValSegEnf', function(req, res) {      
    var user = raw.getPdfValoracion(req, res);  
});

module.exports = router; 