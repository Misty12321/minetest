let express=require('express');
let favicon=require('serve-favicon');
let session=require('express-session');
let loginRouter=require('./router/loginRouter');
let admingRouter=require('./router/adminRouter')
let studentRouter=require('./router/studentRouter')
let dormRouter=require('./router/dormRouter')
let noticeRouter=require('./router/noticeRouter')
let usersetting=require('./router/usersettingRourt')
let uploadRouter=require('./router/uploadRouter')
let app=express();
//秘钥的配置
app.use(session({
    secret:'web329',
    cookie:{maxAge:1000*60*60*60*60},
    resave:true,//重新保存秘钥
    rolling:true,//重新计时
}))

app.use(express.static('./public'));
app.use(favicon('./public/image/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.all('*',function(req,res,next){
    //在这里面要做session的验证。验证通过next
    if(req.session.user){
        next();
    }else{
        if(req.url=='/login'){
            next();
        }else{
            res.send({code:401,msg:'session过期'})
        } 
    }
    
})
app.use(loginRouter);
app.use(admingRouter);
app.use(studentRouter);
app.use(dormRouter);
app.use(noticeRouter);
app.use(usersetting);
app.use(uploadRouter)




app.listen(80)