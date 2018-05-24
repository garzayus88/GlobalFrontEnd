var express = require('express');
var seq = require('../model').sequelize; 
var router = express.Router(); 

exports.getUserInfo = function(req, res){
    debugger;
    seq.query('SELECT u.nom_usu, r.nom_rol FROM usuario u INNER JOIN rol r on u.id_rol = r.id_rol WHERE id_usu = :id_usu ',
    { replacements: { id_usu: req.params.id_usu }, 
    }
    ).spread(function(results, metadata) {
        res.send(JSON.stringify(results));
     });
}

exports.getPacInfo = function(req, res){
    debugger;
    seq.query('SELECT p.nom_Pac, p.ape_Pac, p.tel_pac, p.iden_Pac, p.cel_pac, p.direc_pas, p.ciudad, p.fnaci_pas, s.nom_sex, td.nom_tipdoc, ec.descrip_estado, TIMESTAMPDIFF(YEAR, p.fnaci_pas, CURDATE()) as edad FROM paciente p INNER JOIN sexo s ON p.sex_pas = s.ide_sex INNER JOIN tipo_doc td ON p.tip_iden = td.id_tipdoc INNER JOIN estadocivil ec ON p.esta_civil = ec.id_estado WHERE p.dis_pas = 1 ORDER BY p.nom_pac'
             ).spread(function(results, metadata) {
                res.send(JSON.stringify(results));
             });
}

exports.getPdfData = function(req, res){
    debugger;
    seq.query('SELECT eps.nom_eps, p.nom_Pac,p.ape_Pac,p.tel_pac ,p.iden_Pac,p.cel_pac,p.direc_pas,p.ciudad,p.fnaci_pas,s.nom_sex,td.nom_tipdoc,ec.descrip_estado,TIMESTAMPDIFF(YEAR, p.fnaci_pas,CURDATE()) as edad FROM paciente p INNER JOIN sexo s ON p.sex_pas = s.ide_sex INNER JOIN tipo_doc td ON p.tip_iden = td.id_tipdoc INNER JOIN estadocivil ec ON p.esta_civil = ec.id_estado INNER JOIN eps eps ON eps.ide_eps = p.eps_pac WHERE p.dis_pas = 1 AND iden_pac = \'' + req.params.iden_pac + '\' ORDER BY p.nom_pac LIMIT 1'
             ).spread(function(results, metadata) {
                res.send(JSON.stringify(results[0]));
             });
}

exports.getPdfMedicamentos = function(req, res){
    debugger;
    seq.query('SELECT nom_prod, dosis, hora FROM `seguimientomedicamentos` inner join medicamentos on seguimientomedicamentos.id_prod = medicamentos.id_prod WHERE Id_ValSegEnf = \'' + req.params.Id_ValSegEnf + '\''
             ).spread(function(results, metadata) {
                res.send(JSON.stringify(results));
             });
}

exports.getPdfValoracion = function(req, res){
    debugger;
    seq.query('SELECT Observaciones_val, CAST(pielIntegra AS unsigned) as pielIntegra,observacion_Piel ,percepcion_sensorial ,exposicion_humedad ,actividad ,movilidad ,nutricion ,friccion_cizallamiento ,puntajeTotal_Braden ,observaciones_Braden ,total_puntaje_val ,banarse ,comer ,usar_retrete ,subir_escalera ,vestirse ,ctrl_deposicion ,ctrl_miccion ,caminar ,traslado_silla_cama ,PlandeCuidados ,EducacionPaciente FROM `valoracion_seg_enfermeria` WHERE Id_ValSegEnf = \'' + req.params.Id_ValSegEnf + '\' LIMIT 1'
             ).spread(function(results, metadata) {
                res.send(JSON.stringify(results[0]));
             });
}

