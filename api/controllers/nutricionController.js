let models = require('../model');

exports.GetProfilesByPatient = (req, res)=>{
    res.send('NOT IMPLEMENTED: Book update GET');
};

exports.GetNutritionByPatient = (req, res)=>{

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

};

exports.DeleteNutritionForPatient = (req, res)=>{

};