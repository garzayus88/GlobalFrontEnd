var express = require('express');
var router = express.Router(); 

//import controllers
let nutricion_controller = require('../controllers/nutricionController');

router.post('/nutricion/create', nutricion_controller.CreateNutritionForPatient);
router.get('/nutricion/:id_pac/all', nutricion_controller.GetProfilesByPatient);
router.get('/nutricion/:id_pac/:id',nutricion_controller.GetNutritionByPatient);
router.put('/nutricion/:id/update',nutricion_controller.UpdateNutritionForPatient);

module.exports = router;