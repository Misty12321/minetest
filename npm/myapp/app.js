//引入
let express=require('express');
let favicon = require('serve-favicon')
let mysql=require('mysql');

//服务器搭建
let app=express();
let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
});
//使用
app.use(express.static('./public'))
app.use(favicon('./public/favicon.ico'))

//前后台交互
app.get('/login',function(request,response){
    //request 请求 前端向后台发送的
    //response 响应 后台给前端的
    console.log('有人登录了',request.query)
    let sql=`SELECT * FROM lx_user WHERE USER='${request.query.user}' AND pass='${request.query.pass}'`;
    db.query(sql,function(err,res){
        if(err){
            response.send(err);
        }
        else{
            if(res.length==0){
                response.send('登录失败')
            }
            else{
                response.send('登录成功')
            }
        }
    })
})

//监听
app.listen(8000)