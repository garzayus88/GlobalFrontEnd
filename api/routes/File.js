var express = require('express');
var _router = express.Router();
var multer = require('multer');

var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './uploads');
  
    },
    filename:function(req,file,cb){
        cb(null, Date.now() +  '.'+ file.originalName);

    }
});

var upload = multer({storage:store}).single('file');

_router.post('/upload', function(req, res, next){
    upload(req,res,function(err){
        if(err){
            return res.status(500).json({error:err});
        }

        return res.json({originalName:req.file.originalName, uploadname:req.file.filename});
    });    

})

module.exports = _router;