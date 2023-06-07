let express=require('express');
let db=require('../utils/db')

let router=express.Router();

router.get('/studentget',function(req,res){
    let sql1=`SELECT t_student.s_d_id,t_student.s_id, t_student.s_name, t_student.s_username, t_dorm.d_name, t_dorm.d_balance, t_dorm.d_status,t_dorm.d_id
    FROM t_dorm
    JOIN t_student ON t_dorm.d_id = t_student.s_d_id
    WHERE s_name LIKE '%${req.query.search}%' LIMIT ${(req.query.page-1)*req.query.count},${req.query.count}
    `;
    let sql2=`SELECT count(*) as total
    FROM t_dorm
    JOIN t_student ON t_dorm.d_id = t_student.s_d_id
    WHERE s_name LIKE '%${req.query.search}%'`

    let sql3=`SELECT d_name,d_id FROM t_dorm
    ` 
   
    db.query(sql1,function(err1,data1){
        if(err1){
           res.send({code:500,msg:err1})
        }
        else{
            //成功传入数值执行操作
            db.query(sql2,function(err2,data2){
                if(err2){
                    res.send({code:500,msg:err2})
                }
                else{
                    db.query(sql3,function(err3,data3){
                        if(err3){
                            res.send({code:500,msg:err3})
                        }
                        else{
                            res.send({code:200,data:data1,total:data2[0].total,dormname:data3})
                        }
                    })
                    
                }
            })
          
        }
    })
})

router.post('/addstudent',function(req,res){
    let sta=req.body.SDormitory
    let sql=`INSERT INTO t_student (s_id,s_username, s_password, s_name, s_d_id)
    VALUES (null,'${req.body. SUsername}','${req.body.SPassword}','${req.body.SName}',${sta});`
    console.log(8888,sql);
    let sql2=`SELECT d_id,d_num,d_name,d_maxnum,COUNT(s_d_id) AS d_person 
    FROM t_dorm LEFT JOIN t_student ON d_id=s_d_id Where d_id=${req.body.SDormitory} GROUP BY d_num   `
    console.log(88886666,sql2);
    db.query(sql2,function(err,data1){
        if(err){
            res.send({code:400,msg:err})
        }
        else{
            console.log(data1[0].d_person)
            
            if(data1[0].d_person<req.body.maxnum){
                db.query(sql,function(err,data){
                    if(err)
                    {
                       res.send({code:500,msg:err})
                    }
                    else(
                       res.send({code:200,msg:'成功'})
                    )
            
                })
            }
            else{
                res.send({code:501,msg:'已超出该宿舍最大人数，无法继续添加'})
            } 
        }
            
        
    })
     
  
})

router.post('/delstudent',function(req,res){

    
    let sql1=`DELETE FROM t_student WHERE s_id = ${req.body.stuid};`
  
    db.query(sql1,function(err,data){
        if(err){
            res.send({code:500,msg:err})
        }
        else{
            res.send({code:200,msg:'成功'})
        }
    })
    
})

router.post('/editstu',function(req,res){
    let sql1=`SELECT t_student.s_d_id,t_student.s_id, t_student.s_name, t_student.s_username, t_dorm.d_name, t_student.s_password,t_dorm.d_balance, t_dorm.d_status
    FROM t_dorm
    JOIN t_student ON t_dorm.d_id = t_student.s_d_id
    WHERE t_student.s_id=${req.body.editid}`;
    let sql2=`UPDATE t_student
    JOIN t_dorm ON  t_student.s_d_id = t_dorm.d_id
    SET t_student.s_id=${req.body.editxuehao}, t_student.s_name='${req.body.editname}', t_student.s_username='${req.body.editusername}',t_student.s_password='${req.body.edituserpass}',t_student.s_d_id=${req.body.editsusheming}
    WHERE t_student.s_id=${req.body.editid};
    `
    console.log('asdasdasdasd',sql1);
    console.log('5445645564456',sql2);
    db.query(sql1,function(err1,data2){
        if(err1){
            res.send({code:500,msg:err1})
        }
        else{
            db.query(sql2,function(err2,data2){
                if(err2){
                    res.send({code:200,msg:err2})
                }
                else{
                    res.send({code:200,msg:'修改成功'})}
            })
            
        }

    })
})
module.exports=router;