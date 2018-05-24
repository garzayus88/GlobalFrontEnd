var express = require('express');
var fs = require('fs');
var uuidv4 = require('uuid/v4');
var models = require('../model'); 
var router = express.Router(); 

router.get('/getAll/:Id_ValSegEnf', function(req, res) {      
    models.seguimiento.findAll({
        where: {Id_ValSegEnf: req.params.Id_ValSegEnf},
        //order: [['Id_ValSegEnf', 'DESC']],
        include: [{
            model: models.medicamento
           ,attributes: ['nom_prod']
        }]
    }).  
    then(function(history) {  
        res.status(200).json(history);  
    }, function(error) {  
       res.status(500).send(error);  
    });  
});  

router.post('/add', (req, res)=>{
    console.log(req.body);
    var seg = models.seguimiento.build({        
        dosis: req.body.dosis,
        hora: req.body.hora,
        id_prod: req.body.id_prod,
        id_usu: req.body.id_usu,
        Id_ValSegEnf: req.body.Id_ValSegEnf
    });

    seg.save().then((data)=>{
        res.json({success: true, message: 'se ingreso el registro en seguimiento'});
        res.end();
    })
    .catch((error)=>{
        console.log(error);        
        res.json({success: false, message: 'There is a problem with the insert of seguimientos'});
        res.end();
    })
});

router.delete('/delete/:id',(req, res)=>{
    var id = req.params.id;
    models.seguimiento.findOne({id_MedxSeg: id}).then(hist=>{
        return hist.destroy();
    }).then(()=>{
        res.json({success: true, message: 'se elimino el registro en seguimiento'});
    }).catch((error)=>{
        console.log(error);
        res.json({success: false, message: 'problemas al tratar de borrar el registro'});
    })
});

//Escribe un archivo PDF cuando la app se la entrega en base 64
router.post('/uploadFile', (req, res)=>{

    var index1 = req.body.Source.indexOf('/') + 1;
    var index2 = req.body.Source.indexOf(',') + 1;
    var index3 = req.body.Source.indexOf(';');
    var buf = new Buffer(req.body.Source.substr(index2), 'base64');
    var extension = '.' + req.body.Source.substr(index1, index3 - index1);
    var fileName = uuidv4() + extension;
    var directoryName = __dirname+ "/../uploads/";
    var fullName = directoryName  + fileName;
    var idVisita = req.body.idVisita;

    //Crea la carpeta directorio si no existe
    if (!fs.existsSync(directoryName)){fs.mkdirSync(directoryName);}

    fs.writeFile(fullName, buf, function(err){
        if(err){
            console.log(err);
            res.json({ success: true, message: err });
        }
        else{
            console.log("ok");
            var saveFielBD = models.braden.build({
                idVisita
            });

            models.braden.find({ where: {Id_ValSegEnf: idVisita } })
                .then(valoracion => { return valoracion.update({ruta_PDF: fileName},['ruta_PDF'])})
                .then(updatedOwner => {res.json({ success: true, message: req.body.Source });})
                .catch((err)=>{
                    res.status(400).send(err);
                });
        }
    });
});

router.get('/getFile/:id', function(req, res){
    console.log('getFile');
    var id = req.params.id;

    var saveFielBD = models.braden.build({
        id
    });

    models.braden.find({
        where: {Id_ValSegEnf: id }
      })
        .then(valoracion => {
            console.log(valoracion);
            var fullName = __dirname + "/../uploads/" + valoracion.ruta_PDF;
            res.download(fullName);      
        })
        .catch((err)=>{
            res.status(400).send(err);
        });
});

module.exports = router; 