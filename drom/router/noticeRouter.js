let express=require('express');
let db=require('../utils/db')

let router=express.Router();

router.get('/getnotice',function(req,res){
    let sql=`SELECT n_id,n_title,n_content,t_name ,n_updatetime
    FROM t_teacher 
    LEFT JOIN t_notice ON t_id=n_t_id
    WHERE n_title LIKE '%${req.query.search}%' LIMIT ${(req.query.page-1)*req.query.count},${req.query.count}
    `
    let sql2=`SELECT count(*) as total
    FROM t_teacher 
    LEFT JOIN t_notice ON t_id=n_t_id
    WHERE n_title LIKE '%${req.query.search}%'
    `
    db.query(sql,function(err,data){
        if(err){
            res.send({code:500,msg:err})
        }
        else(
            db.query(sql2,function(err2,data2){
                if(err2)
                {
                    res.send({code:500,msg:err})
                }
                else{
                    res.send({code:200,msg:'渲染成功',data:data,total:data2[0].total})
                 
                }
            })


        )
    })
})
router.post('/addnotice',function(req,res){
    let sql1=`INSERT INTO t_notice ( n_id,n_title, n_content,n_updatetime, n_t_id)
    VALUES (NULL,'${req.body.addtitle}','${req.body.addcontent}','${req.body.updatetime}',${req.body.id});`
    console.log(sql1);
   db.query(sql1,function(err,data){
        if(err)
        {
            res.send({code:500,msg:err})
        }
        else{
            res.send({code:200,msg:'添加成功'})
        }
   })
})
router.post('/delnotice',function(req,res){
    let sql=`DELETE FROM t_notice WHERE n_id=${req.body.delid}`

    db.query(sql,function(err,data){
        if(err){
            res.send({code:500,msg:err})
        }
        else{
            res.send({code:200,msg:'成'})
        }
    })



}



)

router.post('/editnotice',function(req,res){
    let sql=`
    UPDATE t_notice
    SET n_id=${req.body.editid},n_title='${req.body.edtitle}',n_content='${req.body.edcontent}',n_t_id=10,n_updatetime=NULL
    WHERE n_id = 1`
    console.log(sql)
    db.query(sql,function(err,data){
        if(err){
            res.send({code:500,msg:err})
        }
        else(
            res.send({code:200,msg:'成功'})
        )
    })
})
module.exports=router;