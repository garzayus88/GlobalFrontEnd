let models = require('../model');

exports.GetProfilesByPatient = (req, res)=>{
    models.nutricion.findAll({
        where: {iden_pac: req.params.id},
        order: [['idValoracionNutricional', 'DESC']]
    })
    .then((data)=>{
        res.status(200).json(data);
    },(err)=>{
        res.status(500).send(err);
    }).catch((err)=>{console.log(err);});
};

exports.GetNutritionByPatient = (req, res)=>{
    models.nutricion.findAll({where: {
        iden_pac: req.params.id_pac,
        idValoracionNutricional: req.params.id_nutricion
    }})
    .then((data)=>{
        res.status(200).json(data);
    },(err)=>{
        res.status(500).send(err);
    }).catch((err)=>{console.log(err);});
};

exports.CreateNutritionForPatient = (req, res)=>{
    
    let record = models.nutricion.build({      
      DescripcionGeneral: req.body.descripciongeneral,
      Hallazgos: req.body.hallazgos,
      PesoActual: req.body.pesoactual,
      PesoIdeal: req.body.pesoideal,
      TallaReferida: req.body.tallareferida,
      CircunferenciaCarpo: req.body.circunferenciacarpo,
      EstructuraCorporal: req.body.estructuracorporal,
      CircunferenciaPantorrila: req.body.circunferenciapantorrila,
      IMC: req.body.imc,
      Diagnostico: req.body.diagnostico,
      Analisis: req.body.analisis,
      PlandeCuidados: req.body.plandecuidados,
      Fecha: new Date(),
      id_usu: req.body.id_usu,
      iden_pac: req.body.iden_pac
    });

    console.log(record);

    record.save().then((data)=>{
        res.status(200).send(data);
        res.end();
    })
    .catch((err)=>{
        res.status(500).send(err);
    });
    
};

exports.UpdateNutritionForPatient = (req, res)=>{
    models.nutricion.find({where: {idValoracionNutricional: req.params.id }})
    .then(nutricion => {
        return nutricion.update({
            DescripcionGeneral: req.body.descripciongeneral,
            Hallazgos: req.body.hallazgos,
            PesoActual: req.body.pesoactual,
            PesoIdeal: req.body.pesoideal,
            TallaReferida: req.body.tallareferida,
            CircunferenciaCarpo: req.body.circunferenciacarpo,
            EstructuraCorporal: req.body.estructuracorporal,
            CircunferenciaPantorrila: req.body.circunferenciapantorrila,
            IMC: req.body.imc,
            Diagnostico: req.body.diagnostico,
            Analisis: req.body.analisis,
            PlandeCuidados: req.body.plandecuidados,
            Fecha: new Date(),
        }, [
            'DescripcionGeneral',
            'Hallazgos',
            'PesoActual',
            'PesoIdeal',
            'TallaReferida',
            'CircunferenciaCarpo',
            'EstructuraCorporal',
            'CircunferenciaPantorrila',
            'IMC',
            'Diagnostico',
            'Analisis',
            'PlandeCuidados',
            'Fecha'
        ])
    })
    .then(updatedOwner => {
        res.json(updatedOwner);
      })
      .catch((err)=>{
          res.status(400).send(err);
      });

};

exports.DeleteNutritionForPatient = (req, res)=>{

};