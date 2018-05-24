var express = require('express');
var models = require('../model'); 
var router = express.Router(); 

router.get('/getAll/:id',(req, res)=>{
    models.braden.findAll({
        where: {iden_pac: req.params.id},
        order: [['Id_ValSegEnf', 'DESC']]
    })
    .then((data)=>{
        res.status(200).json(data);
    },(err)=>{
        res.status(500).send(err);
    }).catch((err)=>{console.log(err);});
});

router.get('/get/:id_pac/:id_visita',(req, res)=>{
    models.braden.findAll({
        where: {iden_pac: req.params.id_pac,
                Id_ValSegEnf: req.params.id_visita
        }
    })
    .then((data)=>{
        res.status(200).json(data);
    },(err)=>{
        res.status(500).send(err);
    }).catch((err)=>{console.log(err);});
});

router.post('/add',(req, res)=>{
    var val = models.braden.build({      
      Fecha: req.body.Fecha,
      pielIntegra: req.body.pielIntegra,
      observacion_Piel: req.body.observacion_Piel,
      percepcion_sensorial: req.body.percepcion_sensorial,
      exposicion_humedad : req.body.exposicion_humedad,
      actividad: req.body.actividad,
      movilidad: req.body.movilidad,
      nutricion: req.body.nutricion,
      friccion_cizallamiento:  req.body.friccion_cizallamiento,
      puntajeTotal_Braden: req.body.puntajeTotal_Braden,
      observaciones_Braden: req.body.observaciones_Braden,
      banarse : req.body.banarse,
      comer: req.body.comer,
      usar_retrete: req.body.usar_retrete,
      subir_escalera: req.body.subir_escalera,
      vestirse: req.body.vestirse,
      ctrl_deposicion: req.body.ctrl_deposicion,
      ctrl_miccion: req.body.ctrl_miccion,
      caminar: req.body.caminar,
      traslado_silla_cama: req.body.traslado_silla_cama,
      total_puntaje_val: req.body.puntajeTotal_val,
      Observaciones_val: req.body.Observaciones_val,
      PlandeCuidados : req.body.PlandeCuidados,
      iden_pac: req.body.iden_pac,
      id_usu: req.body.id_usu,
      Observacion_gral: req.body.Observacion_gral,
      ruta_PDF: req.body.ruta_PDF
    });

    val.save().then((datos)=> {
        res.status(200).send(datos);
        res.end();
    }).then((err)=>{
        res.json();
        res.end();
    });
});


router.put('/update/:id',(req, res, next)=>{
    
    console.log(req) 
    models.braden.find({
        where: {Id_ValSegEnf: req.params.id }
      })
        .then(valoracion => {
          return valoracion.update({
            pielIntegra: req.body.pielIntegra,
            observacion_Piel: req.body.observacion_Piel,
            percepcion_sensorial: req.body.percepcion_sensorial,
            exposicion_humedad : req.body.exposicion_humedad,
            actividad: req.body.actividad,
            movilidad: req.body.movilidad,
            nutricion: req.body.nutricion,
            friccion_cizallamiento:  req.body.friccion_cizallamiento,
            puntajeTotal_Braden: req.body.puntajeTotal_Braden,
            observaciones_Braden: req.body.observaciones_Braden,
            banarse : req.body.banarse,
            comer: req.body.comer,
            usar_retrete: req.body.usar_retrete,
            subir_escalera: req.body.subir_escalera,
            vestirse: req.body.vestirse,
            ctrl_deposicion: req.body.ctrl_deposicion,
            ctrl_miccion: req.body.ctrl_miccion,
            caminar: req.body.caminar,
            traslado_silla_cama: req.body.traslado_silla_cama,
            total_puntaje_val: req.body.puntajeTotal_val,
            Observaciones_val: req.body.Observaciones_val,
            PlandeCuidados : req.body.PlandeCuidados,
            EducacionPaciente:req.body.EducacionPaciente,
            Observacion_gral:req.body.Observacion_gral
          },['pielIntegra',
            'observacion_Piel',
            'percepcion_sensorial',
            'exposicion_humedad',
            'actividad',
            'movilidad',
            'nutricion',
            'friccion_cizallamiento',
            'puntajeTotal_Braden',
            'observaciones_Braden',
            'banarse',
            'comer',
            'usar_retrete',
            'subir_escalera',
            'vestirse',
            'ctrl_deposicion',
            'ctrl_miccion',
            'caminar',
            'traslado_silla_cama',
            'total_puntaje_val',
            'Observaciones_val',
            'PlandeCuidados',
            'EducacionPaciente',
            'Observacion_gral'
        ])        
        })
        .then(updatedOwner => {
          res.json(updatedOwner);
        })
        .catch((err)=>{
            res.status(400).send(err);
        });
});


module.exports = router; 