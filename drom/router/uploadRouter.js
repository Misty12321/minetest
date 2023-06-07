let express=require('express');
let upload=require('../utils/multer')

let router=express.Router();

router.post('/upload',upload.single('file'),function(req,res){
    console.log(req.file);
    if(req.file){
        res.send({code:200,path:'/uploads/'+req.file.originalname})
    }else{
        res.send({code:500,msg:'上传失败'})
    }
})
router.post('/uploads',upload.array('files',3),function(req,res){
    console.log(2,req.files);
    if(req.files.length>0){
        res.send({code:200,msg:'上传成功'})
    }else{
        res.send({code:500,msg:'上传失败'})
    }
})
router.get('/download',function(req,res){
    res.send({code:'200',url:'/uploads/a.txt'})
})

module.exports=router;