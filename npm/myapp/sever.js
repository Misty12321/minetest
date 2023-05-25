let express=require('express')
let serve=express();
serve.use(express.static('./public'))

console.log('1');
serve.listen(8080);