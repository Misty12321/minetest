let express=require('express');
let db=require('../utils/db');

router=express.Router();

router.post('/login',function(req,res){
    let sql;
    if(req.body.type=='学生'){
        sql=`select * from t_student where s_username='${req.body.username}' and s_password='${req.body.password}';`
    }else if(req.body.type=='管理员'){
        sql=`select * from t_teacher where t_username='${req.body.username}' and t_password='${req.body.password}';`
    }

    db.query(sql,function(err,data){
       console.log(data.length);
            if(data.length>0){
                res.send({code:200,msg:'登陆成功',data:data[0]})
            }
            
        })
})

module.exports=router;