var raw = require('../model/raw_queries');
var express = require('express');
var models = require('../model'); 
var router = express.Router(); 


router.get('/getListPacientes',(req, res)=>{ 
    
    raw.getPacInfo(req, res);
    //  models.paciente.findAll({
    //      where: {dis_pas : 1},
    //      order: ['nom_Pac']
    //  })
    //  .then((data)=>{
    //      res.status(200).json(data);
    //  })
    //  .catch((err)=>{
    //      console.log(err);
    //  })
    //  models.sequelize.query('SELECT p.nom_pac, p.ape_pac, p.tel_pac, p.cel_pac, p.direc_pas, p.ciudad, p.fnaci_pas, s.nom_sex, td.nom_tipdoc, ec.descrip_estado, TIMESTAMPDIFF(YEAR, p.fnaci_pas, CURDATE()) as edad FROM paciente p INNER JOIN sexo s ON p.sex_pas = s.ide_sex INNER JOIN tipo_doc td ON p.tip_iden = td.id_tipdoc INNER JOIN estadocivil ec ON p.esta_civil = ec.id_estado WHERE p.dis_pas = 1  ORDER BY p.nom_pac',
    //  { type: sequelize.QueryTypes.SELECT})
    //  .then(pacientes=>{
    //      res.status(200).json(pacientes);
    //  })
    //  .catch(err=>{
    //      console.log(err);
    //  });
});

router.get('/getUserInfo/:id_usu',(req, res)=>{
    var user = raw.getUserInfo(req, res);    
})

module.exports = router; 