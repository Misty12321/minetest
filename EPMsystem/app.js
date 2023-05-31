let express=require('express');
let favicon=require('serve-favicon');
let loginRouter=require('./router/login');

let app=express();

app.use(express.static('./public'));
app.use(favicon('./public/image/bitbug_favicon.ico'))

app.listen(8888);