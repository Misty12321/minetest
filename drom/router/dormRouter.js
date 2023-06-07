let express=require('express')
let db=require('../utils/db')
let router=express.Router()

router.get('/getdor',function(req,res){
    let sql=`SELECT * FROM t_dorm WHERE d_name LIKE'%${req.query.search}%'LIMIT ${(req.query.page-1)*req.query.count},${req.query.count} `

    let sql2=`SELECT COUNT(*) as total FROM t_dorm WHERE d_name LIKE'%${req.query.search}%' `

    let sql3=`SELECT d_id,d_num,d_name,d_maxnum,d_status,d_balance,COUNT(s_d_id) AS d_person 
    FROM t_dorm LEFT JOIN t_student ON d_id=s_d_id GROUP BY d_num LIMIT ${(req.query.page-1)*req.query.count},${req.query.count}`
    console.log(888888888,sql3)
    db.query(sql,function(err,data){
        if(err){
            res.send({code:500,msg:err})
            }
            else{
                db.query(sql2,function(err2,data2){
                    if(err2){
                        res.send({code:500,msg:err2})
                    }
                    else{
                        db.query(sql3,function(err3,data3){
                            res.send({code:200,data:data,total:data2[0].total,msg:'成功渲染',data3:data3})
                        })
                       
                    }
                })
            }
        }
    )
})
router.post('/adddor',function(req,res){
    sta=req.body.dorMoney;
    if(sta>0){
        sta=1
    }
    else{
        sta=0
    }
    let sql=`INSERT INTO t_dorm (d_id,d_num,d_name,d_maxnum, d_balance,d_status)
    VALUES (null,'${req.body. dorBh}','${req.body.dorName}','${req.body.maxun}',${req.body.dorMoney},${sta});`
   console.log(666,sql);
   
   db.query(sql,function(err,data){

        if(err)
        {
           res.send({code:500,msg:err})
        }
        else(
           res.send({code:200,msg:'成功'})
        )

    })
})

router.post('/editdor',function(req,res){
let sql=`UPDATE t_dorm
SET d_name='${req.body.editdorName}',d_balance=${req.body.editdorMoney}
WHERE d_id=${req.body.editid};`

db.query(sql,function(err,data){
    if(err)
    {
        res.send({code:500,msg:err})
    }
    else{
        res.send({code:200,msg:'修改成功'})
    }
})

})

router.post('/deldorm',function(req,res){
    let sql=`DELETE FROM t_dorm WHERE d_id = ${req.body.delid}`
    console.log(1188888881,sql)
    
    db.query(sql,function(err,data){
        if(err){
            res.send({code:500,msg:err})
        }
        else{
            res.send({code:200,msg:'删除成功'})
        }
    })
})


module.exports=router