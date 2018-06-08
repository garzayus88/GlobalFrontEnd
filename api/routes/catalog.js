var express = require('express');
var router = express.Router(); 

//import controllers
let nutricion_controller = require('../controllers/nutricionController');

router.post('/nutricion/create', nutricion_controller.CreateNutritionForPatient);

module.exports = router;