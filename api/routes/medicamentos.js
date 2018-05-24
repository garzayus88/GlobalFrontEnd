var express = require('express');
var models = require('../model'); 
var router = express.Router(); 

router.get('/getAll', function(req, res) {  
    console.log(typeof(med));
    models.medicamento.findAll().  
    then(function(books) {  
        res.status(200).json(books);  
    }, function(error) {  
       res.status(500).send(error);  
    });  
});  

module.exports = router;