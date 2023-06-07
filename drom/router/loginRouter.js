let express=require('express');
let db=require('../utils/db');

router=express.Router();

/* 
    登录接口
    /login  
    post
    username,password,type
    {code:200,msg:'登录成功'} 500 账号或密码错误
*/
router.post('/login',function(req,res){
    let sql;
    if(req.body.type=='学生'){
        sql=`select * from t_student where s_username='${req.body.username}' and s_password='${req.body.password}';`
    }else if(req.body.type=='管理员'){
        sql=`select * from t_teacher where t_username='${req.body.username}' and t_password='${req.body.password}';`
    }

    db.query(sql,function(err,data){
        if(err){
            res.send({code:500,msg:err})
        }else{
            if(data.length>0){
                //登录成功后，把这个人的信息，进行加密。保存到服务器的session中，并把地址放置在前端cookie里面
                req.session.user=JSON.stringify(data[0])
                res.send({code:200,msg:'登陆成功',data:data[0]})
            }else{
                res.send({code:500,msg:'账号或密码错误'})
            }
        }
    })
})

module.exports=router;