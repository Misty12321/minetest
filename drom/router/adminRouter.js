let express=require('express');
let db=require('../utils/db')

let router=express.Router();

/* 
/getadmin
get
data:{page:1,count:5,search:'xxx'}
res:{code:200,data:[{},{},{}],total:xxx}
1  0,5
2  5,5
3  10,5
page (page-1)*count,count
*/
router.get('/getadmin',function(req,res){
    let sql1=`SELECT * FROM t_teacher where t_name LIKE '%${req.query.search}%' LIMIT ${(req.query.page-1)*req.query.count},${req.query.count} `

    let sql2=`SELECT count(*) as total FROM t_teacher where t_name LIKE '%${req.query.search}%' `
    
    db.query(sql1,function(err,data){
        if(err){
            res.send({code:500,msg:err});
        }
        else{
            db.query(sql2,function(err2,data2){
                if(err2){
                    res.send({code:500,msg:err2});
            }
            else{
                res.send({code:200,data:data,total:data2[0].total})
               
            }
            })
        }
    })
    

})


/* 
 /deladmin
 post
 data id
 res {code,msg:}
*/
router.post('/deladmin',function(req,res){
    let sql=`DELETE FROM t_teacher WHERE t_id=${req.body.id};`;
    console.log(1111,sql);
    db.query(sql,function(err,data){
        if(err){
            res.send({code:500,msg:err})
        }
        else{
            res.send({code:200,msg:'删除成功'})
        }
    }) 



})

router.post('/addadmin',function(req,res){
    let sta=req.body.type;
    if(sta=='超级管理员'){
        sta=1;
    }
    else{
        if(sta=='普通管理员'){
        sta=0;
        }
    }
    let sql=`INSERT INTO t_teacher (t_id,t_username, t_password, t_name, t_type)
    VALUES (null,'${req.body.username}','${req.body.password}','${req.body.uname}',${sta});`
    console.log(79845456,sql);
    db.query(sql,function(err,data){
    if(err){
        res.send({code:500,msg:err})}
        else{
            res.send({code:200,msg:'成功'})
        }
    })
})

router.post('/editadmin',function(req,res){
    let sta=req.body.type;
    if(sta=='超级管理员'){
        sta=1;
    }
    else{
        if(sta=='普通管理员'){
        sta=0;
        }
    }
    let comsql=req.body.username;
    console.log(666666,req.body.id);
    let sql2=`SELECT t_username FROM t_teacher where t_id=${req.body.id}`
    let sql=`UPDATE t_teacher
    SET  t_username = '${req.body.username}',t_password='${req.body.password}' ,t_name='${req.body.ename}',t_type=${sta}
    where t_id=${req.body.id}`
    db.query(sql,function(err,data){
        if(err){
            res.send({code:500,msg:err})
        }
            else {
                if(data){
                    res.send({code:200,msg:'成功'})

                }
            }
        })
})

module.exports=router;