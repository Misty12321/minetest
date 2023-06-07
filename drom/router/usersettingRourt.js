let express=require('express');
let db=require('../utils/db')

let router=express.Router();
router.post('/update',(req,res)=>{

    let sql=`SELECT * from t_teacher where t_id=${req.body.usertid}`  
    console.log(111,sql)
    let sql2=`SELECT * from t_student where s_id=${req.body.usersid}`
    console.log(222,sql2);
    let sql3=`update t_teacher
    set t_username='${req.body.updateusername}',t_password='${req.body.updatepassword}',t_name='${req.body.updatename}',t_url='${req.body.updatepageurl}'
    where t_id=${req.body.usertid}
    `
    console.log(333,sql3)
    
    let sql4=`update t_student
    set s_username='${req.body.updateusername}',s_password='${req.body.updatepassword}',s_name='${req.body.updatename}',s_url='${req.body.updatepageurl}'
    where s_id=${req.body.usersid}`
    
    console.log(444,sql4)
    
    db.query(sql,(err,data)=>{
        //判断这小子是老师还是学生
        if(err){
            
            db.query(sql2,(err2,data2)=>{
                if(err2){
                    res.send({code:501,msg:err2})
                }
                else{
                   db.query(sql4,(err4,data4)=>{
                    if(err4){
                        res.send({code:502,msg:err4})
                    }
                    else{
                        db.query(sql2,(err5,data5)=>{
                            res.send({code:200,msg:'这个人是学生',data:data5[0]})
                        })
                            
                    }
                   })
                  
                }
            })
        }
        else{
            db.query(sql3,(err3,data3)=>{
                if(err3){
                    res.send({code:503,msg:err3})
                }
                else{
                    db.query(sql,(err6,data6)=>{
                        res.send({code:200,msg:'更新了老师',data:data6[0]})
                    })
                   
                }
            })
        }
    })
})

module.exports=router;
